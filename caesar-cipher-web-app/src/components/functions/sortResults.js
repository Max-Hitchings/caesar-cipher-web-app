const DetectLanguage = require("detectlanguage");
const detectlanguage = new DetectLanguage("7644c66e81fea80031848b70140f0f90");

const sortResults = async (sorted, setsorted, results, setBestResultValue) => {
  if (!sorted) {
    const response = await detectlanguage.detect(results);
    var topResult = { index: null, score: 0 };

    var listIndex;
    for (listIndex in results) {
      response[listIndex].map((item, index) => {
        if (
          item.language === "en" &&
          item.isReliable === true &&
          item.confidence > topResult.score
        ) {
          topResult = { index: listIndex, score: item.confidence };
        }
        return "";
      });
    }
    if (topResult !== null) {
      setBestResultValue({
        index: topResult.index,
        value: results[topResult.index],
      });
    }
    console.log(JSON.stringify(response));
    setsorted(true);
  }
};

export default sortResults;
