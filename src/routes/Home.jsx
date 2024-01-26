import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <Button variant="primary">Example button</Button>
      {/* <Button style={{backgroundColor: "green"}}>Example button</Button> */}
    </div>
  );
};

export default Home;
