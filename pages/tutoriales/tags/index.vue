<template>
  <div>
    <Title
      :title="metas.title"
      :description="metas.description"
      :image="metas.image"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="2" xl="2">
          <div class="sticky-top">
            <v-card flat color="transparent" class="pa-3">
              <v-text-field
                v-model="search"
                label="Buscar"
                outlined
                :messages="`${filter.length} tutoriales`"
                append-icon="mdi-magnify"
                validate-on-blur
              />
              <v-divider class="my-6" />
              <p>Categorías</p>
              <template
                v-for="tag in tags.filter(el => el.category === 'categorias')"
              >
                <v-checkbox
                  :key="tag.alias"
                  v-model="tagsSelected"
                  :label="tag.name"
                  :value="tag.alias"
                  :disabled="!tag.visible"
                  color="primary"
                  hide-details
                />
              </template>
              <v-divider class="my-6" />
              <p>Subcategorías</p>
              <template
                v-for="tag in tags.filter(
                  el => el.category === 'subcategorias'
                )"
              >
                <v-checkbox
                  :key="tag.alias"
                  v-model="tagsSelected"
                  :label="tag.name"
                  :value="tag.alias"
                  :disabled="!tag.visible"
                  color="primary"
                  hide-details
                />
              </template>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="10" xl="10">
          <v-row>
            <v-col
              v-for="tutorial in filter.slice(0, pagItems)"
              :key="tutorial.alias"
              xs="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <Item :tutorial="tutorial" />
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn
                v-show="pagItems < maxItems"
                depressed
                small
                @click="pagItems += 5"
              >
                Mostrar más
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Item from '@/components/Pages/Tutoriales/Item'

export default {
  components: {
    Item
  },
  data() {
    return {
      search: '',
      maxItems: 0,
      pagItems: 6,
      tagsSelected: []
    }
  },
  computed: {
    filter() {
      let tutoriales = this.tutoriales

      if (this.tagsSelected.length > 0) {
        tutoriales = tutoriales.filter(
          el =>
            this.tagsSelected.filter(tag => el.tags.includes(tag)).length > 0
        )
      }

      if (this.search !== '' && this.search.length > 2) {
        const search = this.search.toLowerCase()
        tutoriales = tutoriales.filter(el => {
          const title = el.title.toLowerCase()
          const description = el.description.toLowerCase()
          return (
            title.search(search) !== -1 || description.search(search) !== -1
          )
        })
      }

      return tutoriales
    }
  },
  asyncData({ store }) {
    return {
      metas: store.state.metas.tutoriales,
      tags: store.state.tutoriales.tags,
      tutoriales: store.state.tutoriales.list
    }
  },
  created() {
    this.maxItems = this.tutoriales.length
  },
  head() {
    const title = this.metas.title
    const description = this.metas.description
    const image = `${process.env.cdn}${this.metas.image}`

    return {
      title,
      meta: [
        // Global
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'o:t', property: 'og:title', content: title },
        { hid: 'o:d', property: 'og:description', content: description },
        { hid: 'o:i', property: 'og:image', content: image },
        // Twitter
        { hid: 't:t', name: 'twitter:title', content: title },
        { hid: 't:d', name: 'twitter:description', content: description },
        { hid: 't:i', name: 'twitter:image', content: image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 140px;
}
</style>