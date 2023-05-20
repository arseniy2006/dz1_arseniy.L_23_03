import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import PostList from './pages/PostList/PostList'
import Layout from './components/Layout/Layout'
import SinglePost from './pages/SinglePost/SinglePost'
import CreatePost from "/pages/CreatePost /CreatePost.jsx"


export default function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>

                    <Route path='about' element={<About/>} />
                    <Route path='posts' element={<PostList/>} />
                    <Route path='posts/:id' element={<SinglePost/>}/>
                    <Route path='create' element={<CreatePost/>}/>

                </Route>
            </Routes>
        </>
    )
}