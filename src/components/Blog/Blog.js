import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
           <h5>1 About Difference between authorization and authentication</h5> 
           <p> Ans: Authentication verifies who the user is. Authorization determines what resources a user can access. Authentication is the first step of a good identity and access management process.Authorization always takes place after authentication.Authentication is visible to and partially changeable by the user. Authorization isn’t visible to or changeable by the user.</p>

            <h5>2 About using firebase and other options to implement authentication.</h5>
            <p>Ans : Using firebase to authenticate my website.Firebase give the user identification and keep the website secure. Implent to authenticate is that Cookie-Based authentication,Token-Based authentication,Third party access(OAuth, API-token),OpenId,SAML.</p>

            <h5>3 About Firebase other services.</h5>
            <p> ans : There are many services which Firebase provides, Most useful of them are.Cloud Firestore,Cloud Functions,Authentication,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging.</p>

        </div>
    );
};

export default Blog;