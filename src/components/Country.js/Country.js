import React from "react";
import { Link } from "react-router-dom";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const Country = ({ country, onChangeCountry }) => {
  const handleSelect = (e) => {
    // console.log(e.target.value);
    onChangeCountry(e.target.value);
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          // src="https://alan.app/voice/images/previews/preview.jpg"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07712d52323517.5608d99892165.png"
          alt="jarvis-logo"
          className={classes.alanLogo}
        />
      </div>
      <div className={classes.mydiv}>
        <div className={classes.place}>
          <div className={classes.uppernav}>
            <Typography className={classes.header} variant="h5" component="h5">
              Select Country
            </Typography>
          </div>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={country}
              onChange={handleSelect}
              autoWidth
            >
              <MenuItem value={"ww"}>
                <em>International</em>
              </MenuItem>
              <MenuItem value={"ar"}>Argentina</MenuItem>
              <MenuItem value={"au"}>Australia</MenuItem>
              <MenuItem value={"at"}>Austria</MenuItem>
              <MenuItem value={"be"}>Belgium</MenuItem>
              <MenuItem value={"br"}>Brazil</MenuItem>
              <MenuItem value={"bg"}>Bulgaria</MenuItem>
              <MenuItem value={"ca"}>Canada</MenuItem>
              <MenuItem value={"cn"}>China</MenuItem>
              <MenuItem value={"co"}>Colombia</MenuItem>
              <MenuItem value={"cu"}>Cuba</MenuItem>
              <MenuItem value={"cz"}>Czech Republic</MenuItem>
              <MenuItem value={"eg"}>Egypt</MenuItem>
              <MenuItem value={"fr"}>France</MenuItem>
              <MenuItem value={"de"}>Germany</MenuItem>
              <MenuItem value={"gr"}>Greece</MenuItem>
              <MenuItem value={"hk"}>Hong Kong</MenuItem>
              <MenuItem value={"hu"}>Hungary</MenuItem>
              <MenuItem value={"in"}>India</MenuItem>
              <MenuItem value={"id"}>Indonesia</MenuItem>
              <MenuItem value={"ie"}>Ireland</MenuItem>
              <MenuItem value={"il"}>Israel</MenuItem>
              <MenuItem value={"it"}>Italy</MenuItem>
              <MenuItem value={"jp"}>Japan</MenuItem>
              <MenuItem value={"lv"}>Latvia</MenuItem>
              <MenuItem value={"lt"}>Lithuania</MenuItem>
              <MenuItem value={"my"}>Malaysia</MenuItem>
              <MenuItem value={"mx"}>Mexico</MenuItem>
              <MenuItem value={"ma"}>Morocco</MenuItem>
              <MenuItem value={"nl"}>Netherlands</MenuItem>
              <MenuItem value={"nz"}>New zealand</MenuItem>
              <MenuItem value={"ng"}>Nigeria</MenuItem>
              <MenuItem value={"no"}>Norway</MenuItem>
              <MenuItem value={"ph"}>Philippines</MenuItem>
              <MenuItem value={"pl"}>Poland</MenuItem>
              <MenuItem value={"pt"}>Portugal</MenuItem>
              <MenuItem value={"ro"}>Romania</MenuItem>
              <MenuItem value={"ru"}>Russia</MenuItem>
              <MenuItem value={"sa"}>Saudi Arabia</MenuItem>
              <MenuItem value={"rs"}>Serbia</MenuItem>
              <MenuItem value={"sg"}>Singapore</MenuItem>
              <MenuItem value={"sk"}>Slovakia</MenuItem>
              <MenuItem value={"si"}>Slovenia</MenuItem>
              <MenuItem value={"za"}>South Africa</MenuItem>
              <MenuItem value={"kr"}>South Korea</MenuItem>
              <MenuItem value={"se"}>Sweden</MenuItem>
              <MenuItem value={"ch"}>Switzerland</MenuItem>
              <MenuItem value={"tw"}>Taiwan</MenuItem>
              <MenuItem value={"th"}>Thailand</MenuItem>
              <MenuItem value={"tr"}>Turkey</MenuItem>
              <MenuItem value={"ae"}>UAE</MenuItem>
              <MenuItem value={"ua"}>Ukraine</MenuItem>
              <MenuItem value={"gb"}>United Kingdom</MenuItem>
              <MenuItem value={"us"}>United States</MenuItem>
              <MenuItem value={"ve"}>Venuzuela</MenuItem>
            </Select>
          </FormControl>
          <Link className={classes.link} to="/home">
            <Button
              variant="contained"
              className={classes.button}
              disableElevation
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;

//Alterative to BrowserRouter

// onClick={handleProceed}

/* {shouldShowComponent ? (
        <Home country={country} />
      ) : (
        <form action="">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" onChange={handleSelect}>
            <MenuItem value={-1">--Country--</MenuItem>
            <MenuItem value={in">India</MenuItem>
            <MenuItem value={jp">Japan</MenuItem>
            <MenuItem value={us">USA</MenuItem>
            <MenuItem value={br">Brazil</MenuItem>
            <MenuItem value={ch">China</MenuItem>
            <MenuItem value={sr">Sri lanka</MenuItem>
          </select>
          <button type="submit" onClick={handleProceed}>
            Proceed
          </button>
        </form>
      )} */
