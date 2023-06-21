import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import {UserLayout} from './user-data/UserLayout'
import {Info} from './user-data/Info'
import {PostsList} from './user-data/Posts/PostsList'
import {AlbumsList} from './user-data/Albums/AlbumsList';
import { UserProvider } from './user-data/userContext';
import {Pictures} from './user-data/Albums/Pictures';
import {Todos} from './user-data/Todos'
import {NotFound} from './NotFound'
import React from 'react';
import {Comments} from "./user-data/Posts/Comments";
import { Login } from './Login/Login';
import { Register } from './Login/Register';

function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path='/' element={<Navigate to='/Login'/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path="/users/:id" element={<UserLayout/>}>
                    <Route index element={<h1>Home</h1>}/>
                        <Route path="Info" element={<Info/>}/>
                        <Route path="Posts">
                            <Route index element={<PostsList/>}/>
                            <Route path=":id/comments" element={<Comments/>}/>
                        </Route>
                        <Route path="Albums">
                            <Route index element={<AlbumsList/>}/>
                            <Route path=":id/Pictures" element={<Pictures/>}/>
                        </Route>
                    <Route path="Todos" element={<Todos/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </UserProvider>
    );
}

export default App;
