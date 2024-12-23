import { jobOfferFromPro } from "@/automation/actions/createPost/forms/formPages/job/jobOfferFormPro.js";
import { jobTraining } from "@/automation/actions/createPost/forms/formPages/job/jobTraining";
import { carOffer } from "@/automation/actions/createPost/forms/formPages/vehicles/carOffer";
import { motorcycleEquipment } from "@/automation/actions/createPost/forms/formPages/vehicles/motocycleEquipment";
import { boatsOffers } from "@/automation/actions/createPost/forms/formPages/vehicles/boatsOffer";
import { boatsEquipmentOffer } from "@/automation/actions/createPost/forms/formPages/vehicles/boatsEquipmentOffer";
import { caravanOffer } from "@/automation/actions/createPost/forms/formPages/vehicles/caravanOffer";
import { caravanEquipment } from "@/automation/actions/createPost/forms/formPages/vehicles/caravanningEquipmentOffer";
import { autoEquipment } from "@/automation/actions/createPost/forms/formPages/vehicles/autoEquipmentOffer";
import { utilities } from "@/automation/actions/createPost/forms/formPages/vehicles/utilitiesOffer";
import { motoCycleOffer } from "@/automation/actions/createPost/forms/formPages/vehicles/motorcycleOffer";
import { seasonalRentals } from "@/automation/actions/createPost/forms/formPages/vacation/seasonalRentalOffer";
import { animalServicesOffer } from "@/automation/actions/createPost/forms/formPages/services/animalServicesOffer";
import { artistsAndMusicians } from "@/automation/actions/createPost/forms/formPages/services/artistsAndMusiciansOffer";
import { electronicRepairServices } from "@/automation/actions/createPost/forms/formPages/services/electronicRepairServicesOffer";
import { babysittingService } from "@/automation/actions/createPost/forms/formPages/services/babysittingOffer";
import { eventServicesOffer } from "@/automation/actions/createPost/forms/formPages/services/eventsServicesOffer";
import { personalServices } from "@/automation/actions/createPost/forms/formPages/services/personalServicesOffer";
import { movingServices } from "@/automation/actions/createPost/forms/formPages/services/movingServicesOffer";
import { mechanicalRepair } from "@/automation/actions/createPost/forms/formPages/services/mechanicalRepairServicesOffer";
import { gardeningAndDiy } from "@/automation/actions/createPost/forms/formPages/services/gardeningAndDiyServices";
import { agriculturalEquipment } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/agriculturalEquipment";
import { constructionStructuralWorkSite } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/constructionEquipment";
import { heavyweights } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/heavyweights";
import { industrialEquipment } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/industrialEquipment";
import { handlingLifting } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/liftingEquipments";
import { medicalEquipment } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/medicalEquipment";
import { officeEquipmentAndSupplies } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/officeSupplies";
import { equipmentForRestaurantsAndHotels } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/equipmentForRestaurantsAndHotels";
import { tractors } from "@/automation/actions/createPost/forms/formPages/professionalEquipments/tractors";
import { decoration } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/decoration";
import { diy } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/diy";
import { furnishings } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/furnishings";
import { gardenAndPlants } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/gardenAndPlants";
import { householdAppliances } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/householdAppliances";
import { householdLinen } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/householdLinen";
import { stationeryAndSchooldSupplies } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/stationeryAndSchooldSupplies";
import { tableware } from "@/automation/actions/createPost/forms/formPages/homeAndGarden/tableware";
import { computerAccessories } from "@/automation/actions/createPost/forms/formPages/electronics/computerAccessories";
import { computers } from "@/automation/actions/createPost/forms/formPages/electronics/computers";
import { consoles } from "@/automation/actions/createPost/forms/formPages/electronics/consoles";
import { phoneAccessories } from "@/automation/actions/createPost/forms/formPages/electronics/phoneAccessories";
import { phones } from "@/automation/actions/createPost/forms/formPages/electronics/phones";
import { photoAndAudioAndVideo } from "@/automation/actions/createPost/forms/formPages/electronics/photoAndAudioAndVideo";
import { tabletsAndEReaders } from "@/automation/actions/createPost/forms/formPages/electronics/tabletsAndEReaders";
import { videoGames } from "@/automation/actions/createPost/forms/formPages/electronics/videoGames";
import { otherServices } from "@/automation/actions/createPost/forms/formPages/services/otherServicesOffer";
import { eventOffer } from "@/automation/actions/createPost/forms/formPages/services/eventsOffer";

export const lebonCategoriesFunctions = {
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
    Motorcycles: {
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
    Babysitting: {
      offer: (page, post) => babysittingService(page, post),
    },
    Events: {
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
    "Gardening And Diy Services": {
      offer: (page, post) => gardeningAndDiy(page, post),
    },
    "Other Services Offer": {
      offer: (page, post) => otherServices(page, post),
    },
  },
  "Professional equipment": {
    "Agricultural equipment": {
      offer: (page, post) => agriculturalEquipment(page, post),
    },
    "Construction - Structural work site": {
      offer: (page, post) => constructionStructuralWorkSite(page, post),
    },
    Heavyweights: {
      offer: (page, post) => heavyweights(page, post),
    },
    "Industrial equipment": {
      offer: (page, post) => industrialEquipment(page, post),
    },
    "Handling - Lifting": {
      offer: (page, post) => handlingLifting(page, post),
    },
    "Medical equipment": {
      offer: (page, post) => medicalEquipment(page, post),
    },
    "Office Equipment & Supplies": {
      offer: (page, post) => officeEquipmentAndSupplies(page, post),
    },
    "Equipment for restaurants & hotels": {
      offer: (page, post) => equipmentForRestaurantsAndHotels(page, post),
    },
    "Equipment for shops & markets": {
      offer: (page, post) => equipmentForRestaurantsAndHotels(page, post),
    },
    Tractors: {
      offer: (page, post) => tractors(page, post),
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
