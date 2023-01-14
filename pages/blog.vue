<script>
import { CBox } from '@chakra-ui/vue'

import BlogDisc from '~/my-components/blog-disc/blog-disc.vue'
import NewBlog from '~/my-components/newBlog/NewBlog.vue'

import AOS from '@/node_modules/aos/dist/aos'
import 'aos/dist/aos.css'

export default {
  name: 'BlogComponent',
  
  components: { BlogDisc, NewBlog, CBox },
  
  data() {
    return {
      route: this.$route,
      loading: false,
      blogList: [
      {
        id: "1e48dc26-0117-42c2-971c-156fe34d0b3d",
        title: "Node.js multithread",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor quibusdam impedit, hic ratione et non odio fuga vero ex atque ipsa adipisci praesentium tempora illum, officiis veritatis!",
        image: "https://source.unsplash.com/random/700x700?sig=1",
        createdAt: "2022-05-27T10:36:09.719Z",
        updatedAt: "2022-05-27T10:36:09.719Z",
        adminEmail: "admin@arzonbizda.uz",
        firstName: "Asadbek",
        lastName: "Zoirov",
        adminCreatedAt: "2022-05-24T20:19:01.029Z",
        time: "2022-05-24T20:19:01.029Z"
      }
      ],
    }
  },
  
  mounted() {
    //   this.$store.dispatch('addBreadcumbs', this.route)
    AOS.init()
    //   this.fetchItems()
  },
  
  methods: {
    showToast(title, text) {
      this.$toast({
        title: title ?? 'An error occurred.',
        description: text ?? 'Unable to load sharingan. Please shadow clones.',
        status: 'error',
        duration: 10000,
        position: 'top',
      })
    },
    
    // async fetchItems() {
      //   this.loading = true
      
      //   try {
        //     const { data } = await this.$axios.get('blog/posts', {})
        
        //     this.blogList = {
          //       image: data.posts[0].image,
          //       title: data.posts[0].title,
          //       firstName: data.posts[0]['admin.first_name'],
          //       lastName: data.posts[0]['admin.last_name'],
          //       time: data.posts[0]['admin.updatedAt'],
          //       body: data.posts[0].body,
          //     }
          //     // console.log(this.blogList)
          //   } catch (err) {
            //     this.showToast('Serverda muammo bor', "Birozdan so'ng urinib ko'ring")
            //   } finally {
              //     this.loading = false
              //   }
              // },
            },
          }
        </script>
        
        <template>
          <c-box>
            <div>
              <blog-disc :blog="blogList[0]" data-aos="fade-up" data-aos-duration="1000" />
              <NewBlog :blog="blogList" data-aos="fade-up" data-aos-duration="1000" />
            </div>
          </c-box>
        </template>
        