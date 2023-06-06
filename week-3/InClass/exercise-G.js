function getDrivingYears(birthYears) {
    const currentYear = 2023
    const drivingYears = birthYears.filter((birthYear) => {
      return currentYear - birthYear >= 17;
    });
  
    console.log("These are the birth years of people who can drive: " + drivingYears.join(", "));
    
    return drivingYears;
  }