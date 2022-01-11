import { createContext,useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL=process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {

    const initialState={
        users:[],
        loading:false,
        user:{},
        repos:[],
    };

    const [state,dispatch]=useReducer(GithubReducer,initialState);

    // get initial users,'for test purposes'
    // const fetchUsers = async () => {
    //     setLoading();
    //     const response = await fetch(`${GITHUB_URL}/users`,
    //   {
    //     headers: {
    //       Authorization: `${GITHUB_TOKEN}`,
    //     },
    //   })
    //     const data = await response.json();
    //     dispatch({
    //         type:'GET_USERS',
    //         payload:data,
    //     })
    //   }
 
    //to clear users when clear button is submitted
    const clearUsers = () => dispatch({
      type:'CLEAR_USERS',
      payload:[],
    })

    //to search users based on input
    const searchUsers = async (text) => {
          setLoading();

          const params = new URLSearchParams({
            q: text,
          })

          const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
        {
          headers: {
            Authorization: `${GITHUB_TOKEN}`,
          },
        })
          const {items} = await response.json();
          dispatch({
              type:'GET_USERS',
              payload:items,
          })
        }

         //to get repos of the user
         const getUserRepos = async (login) => {
           setLoading();

           
          const params = new URLSearchParams({
            order:'desc',
            per_page:10,
          })
     
           const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
         {
           headers: {
             Authorization: `${GITHUB_TOKEN}`,
           },
         })
           const data  = await response.json();
           dispatch({
               type:'GET_REPOS',
               payload:data,
           })
         }

         //to visit particular user on search
        const getUser = async (login) => {
          setLoading();       

         const response = await fetch(`${GITHUB_URL}/users/${login}`,
        {
          headers: {
            Authorization: `${GITHUB_TOKEN}`,
          },
        })

        if(response.status === 404){
          window.location ='/notfound';
        }
        else{
          const data = await response.json();
          dispatch({
              type:'GET_USER',
              payload:data,
          })   
        }
        }

        //to change loading accorfing to state
      const setLoading = () =>dispatch({type:'SET_LOADING'});

      return <GithubContext.Provider value={{
         users:state.users, //state with list of users fetched from github api
         loading:state.loading,//state with data for loading user results
         user:state.user,//state with data fetched from github api of that paticular user
         repos:state.repos,//state with data of the user repos
         searchUsers,// function to fetch users from github api using search input
         clearUsers,//function to clear results
         getUser,//function to get data of particular user using their login id from github
         getUserRepos,
      }}>
           {children}
      </GithubContext.Provider>
}

export default GithubContext;