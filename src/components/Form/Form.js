import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'


const Form = ({setCurrentId, currentId}) => {

const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
})    
const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null)
const dispatch = useDispatch()

useEffect(() => {
  if (post) setPostData(post)
}, [post])

const handleSubmit = (e) => {
    e.preventDefault()

      if (currentId) {
        dispatch(updatePost(currentId, postData))
        
      } else {
        dispatch(createPost(postData))
        
      }
      clear()

}

const clear = () => {
  setCurrentId(null)
  setPostData({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: ""
})
}

  return (
    <Paper elevation={4}sx={{padding: "15px", margin: "0px"}} >
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography sx={{textAlign: "center", margin: "5px", fontWeight: "bold"}} variant='h6'>{currentId ? 'Editing' : 'Creating'} a Destination</Typography>
        <TextField 
        sx={{marginBottom: "10px"}}
        name="creator" 
        variant='outlined' 
        label="creator" 
        fullWidth 
        value={postData.creator}
        onChange={(e) => setPostData({...postData, creator: e.target.value})}
        />
        <TextField 
        sx={{marginBottom: "10px"}}
        name="title" 
        variant='outlined' 
        label="title" 
        fullWidth 
        value={postData.title}
        onChange={(e) => setPostData({...postData, title: e.target.value})}
        />
        <TextField 
        sx={{marginBottom: "10px"}}
        name="message" 
        variant='outlined' 
        label="message" 
        fullWidth 
        value={postData.message}
        onChange={(e) => setPostData({...postData, message: e.target.value})}
        />
        <TextField 
        sx={{marginBottom: "15px"}}
        name="tags" 
        variant='outlined' 
        label="tags" 
        fullWidth 
        value={postData.tags}
        onChange={(e) => setPostData({...postData, tags: e.target.value})}
        />
        <div sx={{width: '97%', margin: '10px 0'}}>
            <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
            />
        </div>
        <Button sx={{marginBottom: "10", backgroundColor: "#133dff", color: "white", margin: "2px", marginTop: "15px"}} variant='container'  size='large' type='submit' fullWidth >Submit</Button>
        <Button  sx={{backgroundColor: "#fb1818", margin: "2px"}} variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
        </form>
    </Paper>
  )
}

export default Form