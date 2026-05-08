import { Category } from "../_interfaces/ICategory";

interface Time {
  startTime: Date;
  endTime: Date;
  duration: number;
  isBooked: boolean;
  atNight: boolean;
  nightCost: number;
}

interface TimeSlot {
  date: Date;
  times: Time[];
}

export interface Field {
  _id: string;
  name: string;
  image: string;
  category: Category;
  capacity: number;
  isActive: boolean;
  rating: number;
  pricePerHour: number;
  timeSlots: TimeSlot[];
}
