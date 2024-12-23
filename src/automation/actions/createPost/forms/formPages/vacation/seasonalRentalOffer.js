import { lebonFormOptions } from "@/automation/utils/variables/lebonFormOptions";
import { selectors } from "@/automation/utils/variables/selectors";
import { selectAllListOptions } from "../../formAction/selectAllListOptions";
import { writeToInput } from "../writeToInput";
import { pressContinue } from "../../formAction/pressContinue";
import { takeScreenshot } from "@/automation/utils/dev/takeScreenshot";
import { uploadImages } from "../../formAction/uploadImages";
import { seasonalRentalsOffer } from "@/automation/utils/variables/formSelectors/vacationRenals/seasonalRentalsOfferSelectors";
import { selectOption } from "../../formAction/selectOption";
import { skipPrefillMessage } from "../../formAction/skipPrefillMessage";

const {
  SelectServicesAndAccessibility,
  arrivalTimeOption,
  capacityOption,
  departureScheduleOption,
  equipmentOption,
  maximumPrice,
  minimumPrice,
  natureOfAccommodationOption,
  numberOfRoomsOption,
  numberOfStarsOption,
  outsideOption,
  petsAllowdSwitch,
  priceTypeOption,
  rentalWithSwimmingPoolSwitch,
  selectArrivalTime,
  selectCapacity,
  selectDepartureSchedule,
  selectEquipment,
  selectNatureOfAccommodation,
  selectNumberOfRooms,
  selectNumberOfStars,
  selectOutside,
  selectTypeOfAccommodation,
  servicesAndAccessibilityOption,
  smokersAllowd,
  typeOfAccommodationOption,
} = seasonalRentalsOffer;

// todo: you can select multiple options in some of the fields
// need a new function to deal with that or click outside to select only one and 
// close the options list 

const selectorsList = (options) => [
  {
    input: selectNatureOfAccommodation,
    option: () =>
      natureOfAccommodationOption(
        lebonFormOptions.seasonalRentalsOffer.natureOfAccommodation.options.indexOf(
          options.natureOfAccommodation
        ) + 1
      ),
  },
  {
    input: selectTypeOfAccommodation,
    option: () =>
      typeOfAccommodationOption(
        lebonFormOptions.seasonalRentalsOffer.typeOfAccommodation.options.indexOf(
          options.typeOfAccommodation
        ) + 1
      ),
  },
  {
    input: selectNumberOfStars,
    option: () =>
      numberOfStarsOption(
        lebonFormOptions.seasonalRentalsOffer.numberOfStars.options.indexOf(
          options.numberOfStars
        ) + 1
      ),
  },
  {
    input: selectNumberOfRooms,
    option: () =>
      numberOfRoomsOption(
        lebonFormOptions.seasonalRentalsOffer.numberOfRooms.options.indexOf(
          options.numberOfRooms
        ) + 1
      ),
  },
  {
    input: selectCapacity,
    option: () =>
      capacityOption(
        lebonFormOptions.seasonalRentalsOffer.capacity.options.indexOf(
          options.capacity
        ) + 1
      ),
  },
  {
    input: selectArrivalTime,
    option: () =>
      arrivalTimeOption(
        lebonFormOptions.seasonalRentalsOffer.arrivalTime.options.indexOf(
          options.arrivalTime
        ) + 1
      ),
  },
  {
    input: selectEquipment,
    option: () =>
      equipmentOption(
        lebonFormOptions.seasonalRentalsOffer.equipment.options.indexOf(
          options.equipment
        ) + 1
      ),
  },
  {
    input: selectDepartureSchedule,
    option: () =>
      departureScheduleOption(
        lebonFormOptions.seasonalRentalsOffer.departureSchedule.options.indexOf(
          options.departureSchedule
        ) + 1
      ),
  },
  {
    input: selectOutside,
    option: () =>
      outsideOption(
        lebonFormOptions.seasonalRentalsOffer.outside.options.indexOf(
          options.outside
        ) + 1
      ),
  },
  {
    input: SelectServicesAndAccessibility,
    option: () =>
      servicesAndAccessibilityOption(
        lebonFormOptions.seasonalRentalsOffer.servicesAndaccessibility.options.indexOf(
          options.servicesAndaccessibility
        ) + 1
      ),
  },
];

export const seasonalRentals = async (page, post) => {
  try {
    await page.waitForSelector(selectCapacity);

    await skipPrefillMessage(page)

    const listOptionsSelectors = selectorsList(post.options);

    // list options
    await selectAllListOptions(page, listOptionsSelectors);

    //switch 1
    if (post.options.rentalWithSwimmingPoolSwitch) {
      await page.click(rentalWithSwimmingPoolSwitch);
    }
    //switch 2
    if (post.options.smokersAllowd) {
      await page.click(smokersAllowd);
    }
    //switch 3
    if (post.options.petsAllowdSwitch) {
      await page.click(petsAllowdSwitch);
    }

    // description
    await writeToInput(page, post.options.description, selectors.description);

    // reference
    await writeToInput(page, post.options.reference, selectors.reference);

    // select price type option
    await selectOption(
      page,
      priceTypeOption(
        lebonFormOptions.seasonalRentalsOffer.priceType.options.indexOf(
          post.options.priceType
        ) + 1
      )
    );

    // write min price
    await writeToInput(page, post.options.minimumPrice, minimumPrice);

    // write new price
    await writeToInput(page, post.options.maximumPrice, maximumPrice);

    // upload the post images (s3 urls)
    await uploadImages(page, post.images);

    // write address
    await writeToInput(page, post.options.address, selectors.address);

    // submit the post
    await pressContinue(page);

    // check success
    await takeScreenshot(page, "newPost", "success");
  } catch (error) {
    console.log("🚀 ~ jobOfferFrom ~ error:", error);
    await takeScreenshot(page, "newPost", "Error");
  }
};
