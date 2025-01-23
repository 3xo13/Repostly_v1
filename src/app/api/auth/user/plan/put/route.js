import { NextResponse } from "next/server";
import User from "@/db/models/user";
import { connectToDB } from "@/db/connectToDB";
import { getUserId } from "@/utils/helpers/routs/getUserId";
import Subscription from "@/db/models/SubscriptionPlan";
import { plans } from "@/utils/helpers/static/subscriptionPlans";

const checkPlanId = (plan) => {
    return plans.find(el => el.id === plan)
}

export async function POST(req) {
    try {
        const { plan } = await req.json();
        if (!plan || !checkPlanId(plan)) {
            throw new Error("missing data");
        }

        const userId = await getUserId();
        if (!userId) {
            throw new Error("user not found!!");
        }

        const user = await User.findById(userId)

        if (user.subscription) {
            // throw new Error("you're already subscribed");
            return NextResponse.json({ success: true, userId: user._id })
        }

        const currentPlan = plans.find(el => el.id === plan)

        await connectToDB()
        const newSubscriptionPlan = new Subscription(
            { plan, userId, isRenewable: currentPlan.isRenewable, dailyCredit: currentPlan.credit }
        )
        if (!newSubscriptionPlan) {
            throw new Error(
                "unable to create a new subscription object"
            );
        }
        await newSubscriptionPlan.save();

        user.subscription = newSubscriptionPlan._id;

        await user.save()

        return NextResponse.json({ success: true, userId: user._id })
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({ success: false, message: error.message })
    }
}