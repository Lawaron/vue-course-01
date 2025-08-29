  import db from '@/firebase/config'
  import { collection, getDocs } from "firebase/firestore";

  const getBooks = () => {
    const booksRef = collection(db, 'books')

    const load = async () => {
      try {
        const querySnapshot = await getDocs(booksRef)

        querySnapshot.forEach(book => {
          console.log(`${book.id} => `, book.data());
        });
      } catch (err) {
        console.log(err)
      }
    }

    return { load }
  }

  export default getBooks
