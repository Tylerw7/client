import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { MdThumbUp } from "react-icons/md"
import { MdDelete } from "react-icons/md"
import { BsThreeDots } from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts'



//<MdThumbUp />
//<MdDelete />

const Post = ({post, setCurrentId}) => {

    const dispatch = useDispatch()

  return (
    <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '15px', height: '100%', position: 'relative'}}>
        <CardMedia sx={{height: 0, paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken'}} image={post.selectedFile} title={post.title} />
        <div style={{position: 'absolute', top: '20px', left: '20px', color: 'white'}} sx={{position: 'absolute', top: '20px', left: '20px', color: 'white'}} >
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='h6'></Typography>
        </div>
        <div style={{position: 'absolute', top: '20px', right: '20px', color: 'white'}} >
            <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)} ><BsThreeDots fontSize={30} /></Button>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}} >
        <Typography variant='body2' color="textSecondary" >{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>

        <Typography style={{padding: '0 16px'}} variant='h5' gutterBottom >{post.title}</Typography>

        <CardContent>
        <Typography  variant='body2' color="textSecondary" component="p" >{post.message}</Typography>
        </CardContent>
        <CardActions style={{padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between'}}>
            
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                <MdDelete fontSize="small" />
                Delete
                </Button>
        </CardActions>
        
    </Card>
  )
}

export default Post