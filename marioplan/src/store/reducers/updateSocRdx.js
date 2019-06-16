var filteredData2 = [
  {
    "अ क्र": "",
    "तालुका रत्नागिरी": "",
    "संस्था प्रकार कार्यालयाप्रमाणे": "",
    "संस्था प्रकार डी ओ प्रमाणे": "",
    "संस्थेचे नांव": "",
    "संस्थेचे कार्यक्षेत्र": "",
    "लेखापरिक्षकाचे नाव": "",
    "लेखापरिक्षक प्रकार": "",
    "पॅनल नंबर": "",
    "ठराव __ परंतुका": "",
    "लेखापरीक्षण पुर्ण दिनांक": "",
    "लेखापरीक्षण अहवाल प्राप्त दिनांक": "",
    "लेखा परीक्षण शुल्क आकारणी रु ": "",
    "लेखा परीक्षण शुल्क वसुली रु ": "",
    "लेखा परीक्षण शुल्क वसुली दिनांक": "",
    "दोष दुरुस्ती अहवाल येणे दिनांक": "",
    "दोष दुरुस्ती अहवाल प्राप्त दिनांक दिनांक": "",
    "सन 2017_18  दुरुस्ती अहवास  येणे दिनांक": "",
    "सन 2017_18 दोष दुरुस्ती अहवाल प्राप्त दिनांक": ""
  }
];

const updateSocRdx = (state = filteredData2, action) => {
  switch (action.type) {
    case "update_soc":
      var label = Object.keys(action.cred);

      state = action.data;
      var newState = label.reduce((init, iteral, j, arr) => {
        debugger;
        if (init.length !== 0)
          var filterData = init.filter((obj, i) => {
            var key = iteral;
            var formikValue = obj[key].toString().replace(/\s+/gi, " ");
            if (obj[key] === undefined || action.cred[key] === "") {
              return true;
            } else {
              return formikValue === action.cred[key];
            }
          });
        return filterData;
      }, state);

      return newState;

    default:
      return state;
  }
};

export default updateSocRdx;
