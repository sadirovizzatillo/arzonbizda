
// export const state = () => {
//   return {
//     isBadge: [],
//     productsList: [],
//     brandItem: [],
//     title: 'title',
//     loading: false,
//     has_content: 'pending',
//     breadCumbs: [],
//   }
// }
// export const mutations = {
//   SET_PRODUCTS_LIST(state, payload) {
//     state.productsList = payload
//   },

//   SET_BREADCUMBS(state, payload) {
//     state.breadCumbs.push(payload)
//     // if(state.breadCumbs){
//     //   state.breadCumbs.forEach(el => {
//     //     if(el.name !== payload.name) {
//     //         state.breadCumbs.push(payload)
//     //       // if(el.params.id && el.params.id !== payload.params.id){
//     //       //   console.log("ok")
//     //       // }
//     //     } else if(el.params.id !== payload.params.id){
//     //       state.breadCumbs.push(payload)
//     //     }
//     //  })
//     // } else {
//     //   console.log('salom')
//     // }
//   },



//   SET_LOADING(state, payload) {
//     state.loading = payload
//   },

//   SET_HAS_CONTENT(state, payload) {
//     state.has_content = payload
//   },
// }
// export const actions = {

//   addBreadcumbs(ctx, payload) {
//     ctx.commit('SET_BREADCUMBS', payload)
//   },

//   async changeProducts(ctx, { axios, query }) {
//     ctx.commit('SET_LOADING', true)
//     ctx.commit('SET_HAS_CONTENT', 'pending')

//     const { data } = await axios.get(
//       query ? '/product/search' : '/product/home',
//       query ? { params: { q: query } } : undefined
//     )
//     const sendData = data.data.products.map((el) => {
//       return {
//         id: el.id,
//         name: el.name,
//         img: el.images[0].src,
//         price: el.price,
//       }
//     })

//     ctx.commit('SET_PRODUCTS_LIST', sendData)
//     ctx.commit('SET_LOADING', false)
//     ctx.commit('SET_HAS_CONTENT', !sendData.length ? 'no_content' : 'content')
//   },

//   async changePriceProducts(ctx, { axios, searchQ, maxPrice, minPrice }) {
//     ctx.commit('SET_LOADING', true)
//     ctx.commit('SET_HAS_CONTENT', 'pending')

//     const { data } = await axios.get(
//       searchQ ? '/product/search' : '/product/home',
//       {
//         params: {
//           max: maxPrice,
//           min: minPrice,
//           q: searchQ,
//         },
//       }
//     )
//     const sendData = data.data.products.map((el) => {
//       return {
//         id: el.id,
//         name: el.brand_name,
//         img: el.images[0].src,
//         price: el.price,
//       }
//     })

//     ctx.commit('SET_PRODUCTS_LIST', sendData)
//     ctx.commit('SET_LOADING', false)
//     ctx.commit('SET_HAS_CONTENT', !sendData.length ? 'no_content' : 'content')
//   },
// }
export const state = () => {
  return{
    product:[],
    products:[],
    isBadge:[],
    relatedproducts:null,
    categories:[],
    relatedCatgoryProduct:[],
    blogs:null,
    singleBlog:null,
    reviews:null
  }
}

export const mutations = {
  SET_ONE_PRODUCT(state, product){
    state.product = product
  },
  SET_PRODUCTS(state, product){
    state.products = product.products
  },
  SET_ISCOM(state, payload) {
    if (state.isBadge.length < 2) {
      state.isBadge.push(payload)
    }
  },
  SET_RELATED_ADVICE_PRODUCT(state, product){
    state.relatedproducts = product
  },
  SET_SINGLE_BLOG(state, blog){
    state.singleBlog = blog
  },
  SET_CATEGORIES(state, categories){
    state.categories = categories
  },
  SET_RELATED_PRODUCTS(state, relatedCatgoryProduct){
    state.relatedCatgoryProduct = relatedCatgoryProduct
  },
  SET_BLOGS(state, blogs){
    state.blogs = blogs
  },
  SET_SINGLE_REVIEWS(state, review){
    state.reviews = review
  }
}

export const actions = {
  actionsIsCom(ctx, payload) {
    ctx.commit('SET_ISCOM', payload)
  },
  async setProducts({commit}, product){
    try{
      await commit("SET_ONE_PRODUCT", product)
    }catch(err){
      console.log(err)
    }
  },
  async getBlogs({ commit }){
    try{
      const { data } = await this.$axios.get("/blog")
      if(data.success){
        await commit("SET_BLOGS", data.blog)
      }
    }catch(err){
      console.log(err)
    }
  },
  async getProducts({commit}){
    try{
      const { data } = await this.$axios.get("/products/all");
      if(data.success){
        await commit("SET_PRODUCTS", data)
      }
    }catch(err){
      console.log(err)
    }
  },
  async setAdviceProducts({ commit }, id){
    try{
      const { data } = await this.$axios.get(`/products/related/${id}`);
      if(data.success){
        await commit("SET_RELATED_ADVICE_PRODUCT", data.relatedproducts)
      }
    }catch(err){
      console.log(err)
    }
  },
  async login(_, form){
    try{
      const { data } = await this.$axios.post("/auth/login", form);
      if(data.success){
        await localStorage.setItem("user", JSON.stringify(data.user))
        this.$router.push("/")
      }
    }catch(err){
      console.log(err)
    }
  },
  async getRelatedCategories({ commit }, route){
    try{
      const { data } = await this.$axios.get(`/categories/related/${route}`)
      if(data.success){
       await commit("SET_RELATED_PRODUCTS", data.products)
      }
    }catch(err){
      console.log(err)
    }
  },
  async getCategories({ commit }){
    try{
      const { data } = await this.$axios.get("/categories/all");
      if(data.success){
        await commit("SET_CATEGORIES", data.categories)
      } 
    }catch(err){
      console.log(err)
    }
  },
  async getSingleProduct({ commit }, id){
    try{
      const { data } = await this.$axios.get(`/products/${id}`);
      if(data.success){
        await commit("SET_SINGLE_REVIEWS", data.reviews)
      }
    }catch(err){
      console.log(err)
    }
  },
  async submitReview(_, review){
    try{
      const { data } = await this.$axios.post("/reviews", review);
      if(data.success){
        await _.dispatch("getSingleProduct", review.product_id)
        return true
      }
    }catch(err){
      console.log(err)
    }
  }
}

export const getters = {
  productsList: (state) => {
    return state.products
  },
  singleProduct: (state) => {
    return state.product
  },
  isBadgeLength: (state) => {
    return state.isBadge
  },
  relatedProducts: (state) => {
    return state.relatedproducts
  },
  categories: (state) => {
    return state.categories
  },
  relatedCategoryProducts: (state) => {
    return state.relatedCatgoryProduct
  },
  blogs: (state) => {
    return state.blogs
  },
  singleBlog: (state) => {
    return state.singleBlog
  },
  singleReviews: (state) => {
    return state.reviews
  }
}