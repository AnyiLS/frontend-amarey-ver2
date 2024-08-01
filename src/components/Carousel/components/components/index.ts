import React from 'react'
/** Interfaces & Types */
import type {AstasProps, AstaTop} from 'utils/models/Slide'

const DownAsta: React.LazyExoticComponent<React.FC<AstasProps>> = React.lazy(() => import('./downasta'))
const DownLeftAsta: React.LazyExoticComponent<React.FC<AstasProps>> = React.lazy(() => import('./downleftasta'))
const DownRightAsta: React.LazyExoticComponent<React.FC<AstasProps>> = React.lazy(() => import('./downrightasta'))
const TopLeftAsta: React.LazyExoticComponent<React.FC<AstaTop>> = React.lazy(() => import('./topleftasta'))
const TopRightAsta: React.LazyExoticComponent<React.FC<AstasProps>> = React.lazy(() => import('./toprightasta'))
const Tooltip: React.LazyExoticComponent<React.FC> = React.lazy(() => import('../Tooltip'))

const useAstasComponents = () => ({
  DownAsta,
  DownLeftAsta,
  DownRightAsta,
  TopLeftAsta,
  TopRightAsta,
  Tooltip
})

export default useAstasComponents