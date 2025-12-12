import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Bell, Shield, CreditCard, 
  Heart, HelpCircle, LogOut, ChevronRight, Edit2, Camera 
} from 'lucide-react';

export default function Profile() {
  const [user] = useState({
    name: 'Emma Rosebarak',
    email: 'EmmaRosebarak@gmail.com',
    phone: '+234 800 120 5780',
    avatar: 'https://images.unsplash.com/photo-1708572660179-ca6b1bc17be0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D',
  });

  const menuItems = [
    { icon: User, label: 'Edit Profile', href: '/profile/edit' },
    { icon: MapPin, label: 'Saved Addresses', href: '/profile/addresses', badge: '2' },
    { icon: CreditCard, label: 'Payment Methods', href: '/profile/payment' },
    { icon: Heart, label: 'Favorites', href: '/favorites', badge: '5' },
    { icon: Bell, label: 'Notifications', href: '/profile/notifications' },
    { icon: Shield, label: 'Security', href: '/profile/security' },
    { icon: HelpCircle, label: 'Help & Support', href: '/support' },
  ];

  return (
    <div className="min-h-screen pb-8">
      <div className="container py-4">

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl bg-gradient-to-r from-primary to-coral p-6 text-primary-foreground mb-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-20 w-20 rounded-full border-4 border-primary-foreground/30 object-cover"
              />
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground shadow-md hover:bg-card/90 transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-primary-foreground/80">{user.email}</p>
              <p className="text-primary-foreground/80">{user.phone}</p>
            </div>

            <button className="sm:ml-auto flex items-center gap-2 rounded-lg bg-primary-foreground/20 px-4 py-2 text-sm font-medium hover:bg-primary-foreground/30 transition-colors">
              <Edit2 className="h-4 w-4" />
              Edit
            </button>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-foreground/10" />
          <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-primary-foreground/10" />
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Orders', value: '4' },
            { label: 'Reviews', value: '8' },
            { label: 'Points', value: '50' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-card border border-border p-4 text-center"
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Menu */}
        <div className="rounded-xl bg-card border border-border overflow-hidden">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.href}
                className="flex items-center gap-4 p-4 hover:bg-secondary transition-colors border-b border-border last:border-b-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                <span className="flex-1 font-medium">{item.label}</span>

                {item.badge && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {item.badge}
                  </span>
                )}

                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full mt-6 flex items-center justify-center gap-2 rounded-xl border border-destructive py-4 font-medium text-destructive hover:bg-destructive/5 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </motion.button>

        {/* Version */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          QuickCrow.Emazzy
        </p>
      </div>
    </div>
  );
}
