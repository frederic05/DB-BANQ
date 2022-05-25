import { Home, UserPlus, Cast, User, CornerRightUp, BookOpen, CreditCard, ArrowUpRight, ArrowDownLeft, List, Settings} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Accueil',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'compte',
    title: 'Gestion Compte',
    icon: <User size={20} />,
    children: [
      {
        id: 'cnew',
        title: 'Nouveau',
        icon: <UserPlus size={12} />,
        navLink: '/addcompte'
      }
    ]
  },
  {
    id: 'service',
    title: 'Gestion Service',
    icon: <Cast size={20} />,
    children: [
      {
        id: 'snew',
        title: 'Nouveau',
        icon: <CornerRightUp size={12} />,
        navLink: '/addservice'
      },
      {
        id: 'sfrom',
        title: 'formulaire',
        icon: <BookOpen size={12} />
      }
    ]
  },
  {
    id: 'operations',
    title: 'Gestion Opérations',
    icon: <CreditCard size={20} />,
    children: [
      {
        id: 'ttransfet',
        title: 'Transert',
        icon: <ArrowUpRight size={12} />
      },
      {
        id: 'tretrait',
        title: 'Retrait',
        icon: <ArrowDownLeft size={12} />
      },
        {
          id: 'llist',
          title: 'Liste Opérations',
          icon: <List size={12} />
      }
    ]
  },
  {
    id: 'pparametrage',
    title: 'Parametrage',
    icon: <Settings size={20} />,
    navLink: '/'
  }
]