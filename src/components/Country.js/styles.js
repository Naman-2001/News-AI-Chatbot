import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
    marginTop: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  place: {
    justifyContent: "space-around",
    backgroundColor: "white",
    height: "250px",
    width: "200px",
    textAlign: "center",
    borderRadius: "5px",
    paddingBottom: "30px",
    alignItems: "center",
  },
  button: {
    margin: "70px 0",
    backgroundColor: "rgb(32 32 41)",
    width: "150px",
    color: "white",
  },
  header: {
    fontFamily: "Open Sans",
    fontSize: "20px",
  },
  link: {
    textDecoration: "none",
  },
  uppernav: {
    paddingTop: "10px",
    backgroundColor: "#65e0ff",
    borderRadius: "5px",
    height: "50px",
    textAlign: "center",
  },
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  alanLogo: {
    height: "27vmin",
    borderRadius: "50%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
  mydiv: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
}));
