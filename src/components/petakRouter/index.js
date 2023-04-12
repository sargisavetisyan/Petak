import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Jobs } from '../../pages/Jobs';
import { LogIn } from '../../pages/LogIn';
import { Service } from '../../pages/ServiceHome';
import { SignUp } from '../../pages/SignUp';
import { Layout } from '../Layout';
import { Electronics } from '../../pages/Electronics';
import { Car } from '../Car';
import { Job } from '../Job';
import { Cars } from '../../pages/Cars';
import { Profile } from '../../pages/Profile';
// import { Categorys } from '../../pages/Categorys';

export const PetakRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />} />
                    <Route path='/car/:id' element={<Car />} />
                    <Route path='/job/:id' element={<Job />} />
                    <Route path='/login' element={<LogIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/cars' element={<Cars />} />
                    {/* <Route path='/see/:name' element={<Categorys />} /> */}
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/electronics' element={<Electronics />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}