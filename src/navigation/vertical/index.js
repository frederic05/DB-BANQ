import { Mail, Home, UserPlus, Cast, User, CornerRightUp, BookOpen, CreditCard, ArrowUpRight, ArrowDownLeft, List, Settings} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Accueil',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'Compte',
    title: 'Gestion Compte',
    icon: <User size={20} />,
    children: [
      {
        id: 'Cnew',
        title: 'Nouveau',
        icon: <UserPlus size={12} />
      }
    ]
  },
  {
    id: 'Service',
    title: 'Gestion Service',
    icon: <Cast size={20} />,
    children: [
      {
        id: 'Snew',
        title: 'Nouveau',
        icon: <CornerRightUp size={12} />
      },
      {
        id: 'Sfrom',
        title: 'formulaire',
        icon: <BookOpen size={12} />
      }
    ]
  },
  {
    id: 'Operations',
    title: 'Gestion Opérations',
    icon: <CreditCard size={20} />,
    children: [
      {
        id: 'Ttransfet',
        title: 'Transert',
        icon: <ArrowUpRight size={12} />
      },
      {
        id: 'Tretrait',
        title: 'Retrait',
        icon: <ArrowDownLeft size={12} />
      },
        {
          id: 'Llist',
          title: 'Liste Opérations',
          icon: <List size={12} />
      }
    ]
  },
  {
    id: 'Pparametrage',
    title: 'Parametrage',
    icon: <Settings size={20} />,
    navLink: '/'
  }
]
