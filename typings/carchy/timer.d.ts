declare interface JtProject {
   projectId: String;
   name: String;
   children : JtDuty [];
      
}
declare interface  JtDuty {
    dutyId: String;
    pId: String;
    name: String;
    state : "STOP" | "PAUSE" | "START"
    totalDuration: Number
    startTime ?: Date
}