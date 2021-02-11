import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        flexGrow: 1,
      },
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const Home = () => {
    const classes = useStyles()

    return(
      // <Nav/>
      <div 
      // container 
      //   className={classes.root} 
      //   spacing={0} 
      //   justify="center" 
      //   style={{}}
      >
        <div>

My new portfolio     
        </div>
 </div>
       
    )
}

export default Home