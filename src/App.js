import './App.css';
import styled from 'styled-components';
// import Background from './components/background.js';
// import DetailList from './components/detail_list.js';
import Story from './components/story.js'
import DetailBoard from './components/detail_board.js';

const StyledAppDiv = styled.div`
  display: flex;
  height: 600px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid red;
`;


function App() {

  const NUMDETAILS = 16;
  const possibleConnectors = [
    [1, 1], [1, 2], [1, 3],
    [2, 1], [2, 2], [2, 3],
    [3, 1], [3, 2], [3, 3],
  ];
  const possibleTypes = ['who', 'where', 'when'];

  // Helper function to generate random integers
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  } ;


  const generateDetailList = (num = NUMDETAILS) => {
    return new Array(num).fill(undefined).map((x, i) => {
      return {
        type: possibleTypes[ getRandomInt(possibleTypes.length) ],
        connectors: possibleConnectors[ getRandomInt(possibleConnectors.length) ],
      };
    });
  };

  return (
    <StyledAppDiv>
      <DetailBoard
        detailList = {generateDetailList(NUMDETAILS)}
      />
      <Story 
        storyDetails = {generateDetailList(3)}
      />
    </StyledAppDiv>
  );
}

export default App;
