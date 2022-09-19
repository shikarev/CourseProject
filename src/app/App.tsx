import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to='/'>Главная</Link>
      <Link to='about'>О сайте</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
