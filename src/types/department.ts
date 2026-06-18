import { ComponentType } from "react";

export interface IDepCard {
  id : number ,
  icon? : ComponentType<any>,
  iconBgColor?: string,
  iconColor? : string,
  availableSpecialist? : number,
  field : string,
  category  : string,
  summary : string,
  onView? : ()=> void, 
}

export interface ViewDeparmentModal {
  id : number,
  icon : ComponentType<any>,
  field : string,
  image : string,
  overview : string,
  services : string[],
  category?: string,
  summary?: string
}

