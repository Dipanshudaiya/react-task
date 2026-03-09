import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      error: null,
      registeredUsers: [{ email: "test@test.com", password: "password", name: "Test User" }],
      
      login: (email, password) => {
        const { registeredUsers } = get();
        const foundUser = registeredUsers.find(u => u.email === email && u.password === password);
        
        if (foundUser) {
          set({ user: { name: foundUser.name, email: foundUser.email }, error: null });
          return true;
        } else {
          set({ error: "Invalid credentials" });
          return false;
        }
      },
      
      register: (name, email, password) => {
        set((state) => ({ 
          registeredUsers: [...state.registeredUsers, { name, email, password }],
          error: null 
        }));
        return true;
      },
      
      logout: () => set({ user: null })
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
    }
  )
);
