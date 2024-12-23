import { jobOfferFromPro } from "@/automation/actions/createPost/forms/formMultiPages/job/jobOfferFormPro.js";
import { jobTraining } from "@/automation/actions/createPost/forms/formMultiPages/job/jobTraining";
import { carOffer } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/carOffer";
import { motorcycleEquipment } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/motocycleEquipment";
import { boatsOffers } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/boatsOffer";
import { boatsEquipmentOffer } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/boatsEquipmentOffer";
import { caravanOffer } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/caravanOffer";
import { caravanEquipment } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/caravanningEquipmentOffer";
import { autoEquipment } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/autoEquipmentOffer";
import { utilities } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/utilitiesOffer";
import { motoCycleOffer } from "@/automation/actions/createPost/forms/formMultiPages/vehicles/motorcycleOffer";
import { seasonalRentals } from "@/automation/actions/createPost/forms/formMultiPages/vacation/seasonalRentalOffer";
import { animalServicesOffer } from "@/automation/actions/createPost/forms/formMultiPages/services/animalServicesOffer";
import { artistsAndMusicians } from "@/automation/actions/createPost/forms/formMultiPages/services/artistsAndMusiciansOffer";
import { electronicRepairServices, electronicRepairServicesOffer } from "@/automation/actions/createPost/forms/formMultiPages/services/electronicRepairServicesOffer";
import { eventServicesOffer } from "@/automation/actions/createPost/forms/formMultiPages/services/eventsServicesOffer";
import { personalServices } from "@/automation/actions/createPost/forms/formMultiPages/services/personalServicesOffer";
import { movingServices } from "@/automation/actions/createPost/forms/formMultiPages/services/movingServicesOffer";
import { mechanicalRepair } from "@/automation/actions/createPost/forms/formMultiPages/services/mechanicalRepairServicesOffer";
import { gardeningAndDiy } from "@/automation/actions/createPost/forms/formMultiPages/services/gardeningAndDiyServices";
import { otherServices } from "@/automation/actions/createPost/forms/formMultiPages/services/otherServicesOffer";
import { eventOffer } from "@/automation/actions/createPost/forms/formMultiPages/services/eventsOffer";
import { decoration } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/decoration";
import { diy } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/diy";
import { furnishings } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/furnishings";
import { gardenAndPlants } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/gardenAndPlants";
import { householdAppliances } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/householdAppliances";
import { householdLinen } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/householdLinen";
import { stationeryAndSchooldSupplies } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/stationeryAndSchooldSupplies";
import { tableware } from "@/automation/actions/createPost/forms/formMultiPages/homeAndGarden/tableware";
import { computerAccessories } from "@/automation/actions/createPost/forms/formMultiPages/electronics/computerAccessories";
import { computers } from "@/automation/actions/createPost/forms/formMultiPages/electronics/computers";
import { consoles } from "@/automation/actions/createPost/forms/formMultiPages/electronics/consoles";
import { phoneAccessories } from "@/automation/actions/createPost/forms/formMultiPages/electronics/phoneAccessories";
import { phones } from "@/automation/actions/createPost/forms/formMultiPages/electronics/phones";
import { photoAndAudioAndVideo } from "@/automation/actions/createPost/forms/formMultiPages/electronics/photoAndAudioAndVideo";
import { tabletsAndEReaders } from "@/automation/actions/createPost/forms/formMultiPages/electronics/tabletsAndEReaders";
import { videoGames } from "@/automation/actions/createPost/forms/formMultiPages/electronics/videoGames";

export const lebonMultiPageFormFunctions = {
  Job: {
    "Job offers": {
      offer: (page, post) => jobOfferFromPro(page, post),
    },
    "Professional training": {
      offer: (page, post) => jobTraining(page, post),
    },
  },
  Vehicles: {
    Cars: {
      offer: (page, post) => carOffer(page, post),
    },
    "Motorcycles": {
      offer: (page, post) => motoCycleOffer(page, post),
    },
    "Motorcycle equipment": {
      offer: (page, post) => motorcycleEquipment(page, post),
    },
    Boats: {
      offer: (page, post) => boatsOffers(page, post),
    },
    "Boats equipment": {
      offer: (page, post) => boatsEquipmentOffer(page, post),
    },
    Caravans: {
      offer: (page, post) => caravanOffer(page, post),
    },
    "Caravans equipment": {
      offer: (page, post) => caravanEquipment(page, post),
    },
    "Auto equipment": {
      offer: (page, post) => autoEquipment(page, post),
    },
    Utilities: {
      offer: (page, post) => utilities(page, post),
    },
  },
  "Vacation Rentals": {
    "Seasonal rentals": {
      offer: (page, post) => seasonalRentals(page, post),
    },
  },
  Services: {
    "Animal Services": {
      offer: (page, post) => animalServicesOffer(page, post),
    },
    "Artists & Musicians": {
      offer: (page, post) => artistsAndMusicians(page, post),
    },
    "Electronic Repair Services": {
      offer: (page, post) => electronicRepairServices(page, post),
    },
    "Babysitting": {
      offer: (page, post) => babysittingService(page, post),
    },
    "Events": {
      offer: (page, post) => eventOffer(page, post),
    },
    "Event services": {
      offer: (page, post) => eventServicesOffer(page, post),
    },
    "Personal services": {
      offer: (page, post) => personalServices(page, post),
    },
    "Moving Services": {
      offer: (page, post) => movingServices(page, post),
    },
    "Mechanical repair services": {
      offer: (page, post) => mechanicalRepair(page, post),
    },
    "Gardening & DIY services": {
      offer: (page, post) => gardeningAndDiy(page, post),
    },
    "Other services": {
      offer: (page, post) => otherServices(page, post),
    },
  },
  "Home & Garden": {
    Decoration: {
      offer: (page, post) => decoration(page, post),
    },
    DIY: {
      offer: (page, post) => diy(page, post),
    },
    Furnishings: {
      offer: (page, post) => furnishings(page, post),
    },
    "Garden & Plants": {
      offer: (page, post) => gardenAndPlants(page, post),
    },
    "Household appliances": {
      offer: (page, post) => householdAppliances(page, post),
    },
    "Household linen": {
      offer: (page, post) => householdLinen(page, post),
    },
    "Stationery & School Supplies": {
      offer: (page, post) => stationeryAndSchooldSupplies(page, post),
    },
    Tableware: {
      offer: (page, post) => tableware(page, post),
    },
  },
  Electronic: {
    "Computer accessories": {
      offer: (page, post) => computerAccessories(page, post),
    },
    Computers: {
      offer: (page, post) => computers(page, post),
    },
    Consoles: {
      offer: (page, post) => consoles(page, post),
    },
    "Phone accessories & Connected objects": {
      offer: (page, post) => phoneAccessories(page, post),
    },
    "Phones & Connected Objects": {
      offer: (page, post) => phones(page, post),
    },
    "Photo, audio & video": {
      offer: (page, post) => photoAndAudioAndVideo(page, post),
    },
    "Tablets & E-readers": {
      offer: (page, post) => tabletsAndEReaders(page, post),
    },
    "Video games": {
      offer: (page, post) => videoGames(page, post),
    },
  },
};
