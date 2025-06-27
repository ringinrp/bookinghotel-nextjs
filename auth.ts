import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: {strategy:"jwt"},
  pages:{
    signIn: "/signin",
  },
  callbacks : {
    jwt({token, user}){
      if(user) token.role =  user.role;
      return token;
    },
    session({session, token}){
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    }
  }
})