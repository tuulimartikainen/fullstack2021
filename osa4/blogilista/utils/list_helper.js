const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }
    return blogs.reduce(reducer, 0)
  }

  const favouriteBlog = (blogs) => {
    const favourite = (previousValue, currentValue) => {
    
        if (previousValue.likes < currentValue.likes)
            return currentValue
        else return {title: previousValue.title, 
            author: previousValue.author, 
            likes: previousValue.likes
     }
    }
    return blogs.reduce(favourite, {likes: 0})
  }

  
  module.exports = {
    dummy, 
    totalLikes,
    favouriteBlog
  }