import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import quotesData from "../data/quotes.json";


function generateRandom() {
  const randomArrayIndex = Math.floor(Math.random() * quotesData.quotes.length);

  const quote = {
    quote: quotesData.quotes[randomArrayIndex].quote,
    author: quotesData.quotes[randomArrayIndex].author,
  };

  return quote;
}

const QuoteWidget = () => {
  let quote = generateRandom()
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Quote of the day
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="50%"
        alt="john"
        src="http://localhost:3001/assets/quotes.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>{quote.author}</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        {quote.quote}
      </Typography>
    </WidgetWrapper>
  );
};

export default QuoteWidget;
