const level = (qual) => {if (qual == "low") {return "faible"}
  else {
    if (qual == "moderate") {return "modéré"}
      else {
        if (qual == "high") {return "élevé"}
          else {return "non défini"}
      }
  }
}

export default level;