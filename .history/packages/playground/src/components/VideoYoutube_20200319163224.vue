<template>
  
</template>

<script lang="ts">

enum ContentType {
    Video,
    VideoYoutube
}

interface Meta {
    authors: string[],
    creationTime: number,
    lastUpdated: number,
    is: ContentType[],
}

interface VideoYoutubeContent {
  meta: Meta,
  data: {
    videoId: string,
  }
}
export default {
    props: {
        content: {
            type: VideoYoutubeData,
            default: ""
        },
    },
}
</script>

<style>

</style>