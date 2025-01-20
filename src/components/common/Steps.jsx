"use client"
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/ContextProviedr";
export default function StepsIndicator({ steps }) {
  const pathname = usePathname();
//   const [currentStep, setCurrentStep] = useState(initialStep);

  // Function to handle navigation between steps
//   const goToStep = (stepIndex) => {
//     if (stepIndex >= steps.length) return;
//     setCurrentStep(stepIndex);
//     router.push(steps[stepIndex].path); // Navigate to the corresponding step
//   };
  // Determine the active step index based on the current route
  const {setComplatedSteps ,complatedSteps } = useAppContext()
  const activeIndex = steps.findIndex((step) => step.path === pathname);

  return (
    <div className="grid lg:grid-cols-5 gap-1 h-[10dvh] place-items-center w-full justify-center items-center md:grid grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={step.label}
          className={`w-10/12 h-3 rounded-[10] 
            ${
              step.label <= complatedSteps.includes(step.label)
                ? "bg-main text-white"
                : "bg-gray-300 text-gray-600"
            }
          `}
        >
         
        </div>
      ))}
    </div>
  );
}
