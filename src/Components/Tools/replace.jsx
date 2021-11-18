const replace = (qual) => { if (qual == "fat")
    {return "Matière grasse"}
      else {
        if (qual == "salt") {return "Sel"}
          else {
            if (qual == "saturated-fat") {return "Graisse saturée"}
              else {
                if (qual == "sugars") {return "Sucre"}
                  else {return "non défini"}
              }
          }
      }
}

export default replace;