import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'


const App = () => {

    const [currentId, setCurrentId] = useState(null)

        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(getPosts())
        }, [currentId, dispatch])
    

    return (
        <Container maxWidth="lg">
            <AppBar sx={{marginBottom: "75px", borderRadius: "15px", backgroundColor: "antiqueWhite"}} position="static" color="inherit">
                <Typography  variant="h2" align="center">My Travel Journal</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;