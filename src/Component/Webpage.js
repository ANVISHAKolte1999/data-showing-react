import React, { useEffect,useState } from 'react';
import axios from "axios";
import { CardColumns,Card, CardGroup } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './webpage.css';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const  Webpage = () => {
    const [users,setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await axios.get("http://localhost:3000/posts");
        setPosts(result.data);
    };

  
    return (
        <div className="container">
            <div className="py-4">
                <h1> Employe data</h1>
                
                <CardColumns>
   {users.map((user, index) => (
     
    <Card >
      <Card.Body>
      <Card.Text variant="body2" component="p">
        <td><Card.Header>{user.verified}</Card.Header></td>
        </Card.Text>

        <Card.Text variant="body2" component="p">
        <td><i>   Role : {user.role}</i></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><td>Id :{user._id}</td></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><td><td>
        Username:
     {user.username}</td></td></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td>Email:{user.Email}</td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td>Phone No:{user.Phone_No}</td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td> country Code:{user. countryCode}</td>
        </Card.Text>
        
        </Card.Body>
        </Card>
         /* {
         
         
          }*/
        
       ))
   }
   </CardColumns>
  
            </div>
        </div>
    );
};

export default Webpage;
