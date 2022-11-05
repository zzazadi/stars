<template>
  <div>
    <NuxtLink :to="join(language)" class="flex p-4 items-center justify-center bg-gray-100">
      <svg class="w-4 h-4" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/></svg>
      {{ $t('Back To List') }}
    </NuxtLink>
    <div class="flex flex-col items-center justify-center p-4">
      <div v-if="image" class="w-36 h-36">
        <img :src="image" alt="" class="w-full h-full rounded-full mx-auto block object-cover">
      </div>
      <h1 class="text-3xl my-3">{{ name }}</h1>
      <div class="flex flex-col items-center justify-center text-center gap-1 mt-2">
        <div class="text-sm text-gray-500">
          <div class="my-1">{{ $t('Birth') }}</div>
          <div>
            <span class="text-black">{{ data.birth?.date }}</span> - <span class="text-black">{{ data.birth?.city }}</span> - <span class="text-black">{{ data.birth?.province }}</span>
          </div>
        </div>
        <div class="text-sm text-gray-500">
          <div class="my-1">{{ $t('Death') }}</div>
          <span class="text-black">{{ data.death?.date }}</span> - <span class="text-black">{{ data.death?.city }}</span> - <span class="text-black">{{ data.death?.province }}</span>
        </div>
        <div class="text-sm text-gray-500">
          <div class="my-1">{{ $t('Age') }}</div>
          <span class="text-black">{{ $t(data.death?.age) || '-' }}</span>
        </div>
      </div>
      <div class="bottom-0" dir="ltr">
        <a v-if="data.wikipedia" rel="noopener noreferrer" target="_blank" title="wikipedia" :href="data.wikipedia" class="inline-block border border-gray-300 rounded-md shadow-sm py-1 px-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <IconWikipedia class="w-4 h-4" />
        </a>
      </div>
      <hr class="bg-gray-500 w-full mt-8">
      <div class="content p-8 max-w-[680px] leading-7">
        <ContentRenderer :value="data">
          <template #empty>
            <div></div>
          </template>
        </ContentRenderer>
      </div>

      <template v-if="data.images?.length">
        <h4 class="my-2">{{ $t('Gallery')}} </h4>
        <div class="w-full grid grid-cols-4 gap-2">
          <div v-for="img in data.images" :key="img" class="relative w-full pb-[100%]">
            <img :src="withAppBase(data._path, img)" class="w-full h-full object-cover absolute">
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const { withAppBase, join, withDomain } = useURL()
const { $t, $date, lang } = useI18n()
const language = computed(() => lang.value === 'fa' ? '' : lang.value)

const route = useRoute()
const path = '/' + (Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]).filter(Boolean).join('/')
const { data } = await useAsyncData(path, () => queryContent(path).without(['excerpt', '_file']).sort({'death.date': -1 }).findOne(), {
  transform: (data: any) => ({
    ...data,
    death: {
      ...data.death,
      date: $date(data.death?.date),
      city: $t(data.death?.city),
      province: $t(data.death?.province)
    },
    birth: {
      ...data.birth,
      date: $date(data.birth?.date),
      city: $t(data.birth?.city),
      province: $t(data.birth?.province)
    }
  })
})

const name = computed(() => lang.value === 'en' ? data.value.name : data.value.nameFa)
const title = `${name.value} - ${data.value.death?.city} - ${data.value.death?.province}`
const image = computed(() => data.value?.images?.[0] ? withAppBase(data.value?._path, data.value?.images?.[0]) : '')
const description = computed(() => [
  name.value,
  data.value?.death.age ? ` ${data.value?.death.age} ${$t('Years')}\n` : '',
  data.value?.death?.date,
  data.value.death?.city,
  data.value.death?.province
].filter(Boolean).join(' - '))
useHead({
  title,
  meta: [
    { name: 'description', content: description.value },
    { name: 'og:title', content: name.value },
    { name: 'og:description', content: description.value },
    { name: 'og:image', content: withDomain(image.value) },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: name.value },
    { name: 'twitter:description', content: description.value },
    { name: 'twitter:image', content: withDomain(image.value)  }
  ],
})
</script>

<style>
.content img {
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 8px;;
}
blockquote {
  background: #f9f9f9;
  border-right: 10px solid #ccc;
  margin: 1em 0px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-left: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>