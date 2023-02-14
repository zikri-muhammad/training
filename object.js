let outletDeliverySchedule = {
  monday: {
    start_time: "00:00",
    end_time: "23:59",
  },
  tuesday: {
    start_time: "00:00",
    end_time: "23:59",
  },
  wednesday: {
    start_time: "00:00",
    end_time: "23:59",
  },
  thursday: {
    start_time: "00:00",
    end_time: "23:59",
  },
  friday: {
    start_time: "00:00",
    end_time: "23:59",
  },
  saturday: {
    start_time: "00:00",
    end_time: "23:59",
  },
  sunday: {
    start_time: "00:00",
    end_time: "23:59",
  },
};

// get today
let dayName = new Date()
  .toLocaleString("en-us", { weekday: "long" })
  .toLocaleLowerCase();

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

let dataOutlets = [];
// update data daily by time
days.forEach(async (day) => {
  if (outletDeliverySchedule.hasOwnProperty(day)) {
    if (day == dayName) {
      dataOutlets.push({
        begin_hour: outletDeliverySchedule[day].start_time,
        end_hour: outletDeliverySchedule[day].end_time,
        rsc_code: "string",
      });
    }
  }
});

if (dataOutlets != 0) {
  console.log(dataOutlets[0]);
}
