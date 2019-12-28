import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectRoot: {
    fontSize: 13,
  },
  labelRoot: {
    fontSize: 13,
  }
}));

const SimpleSelect = ({ onChange, value, label, name }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label" className={classes.labelRoot}>
        {label}
      </InputLabel>
      <Select
        labelId={name}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        labelWidth={labelWidth}
        className={classes.selectRoot}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Bachelors</MenuItem>
        <MenuItem value={20}>MBA</MenuItem>
        <MenuItem value={20}>Masters</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;
