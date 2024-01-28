
<template lang="pug">

    <!-- timeline -->
    div.min-h-screen.flex.flex-col.justify-start.py-12

        div(class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0")

            ul.flex.flex-col.gap-y-8.relative.text-gray-300.antialiased.text-sm.font-semibold

                //- Card
                li(class="bg-slate-200 border-2 border-slate-300 shadow-sm rounded-md overflow-hidden dark:bg-gray-700 dark:border-gray-800" v-for="event in events")
                    //- Event Header
                    div
                        <img :src=event.picture>
                    
                    //- Event Body
                    div(class="py-4 px-6 text-gray-800 dark:text-white")

                        div
                            p.text-3xl {{ event.name }}
                        
                        div.flex.items-center.gap-x-2.text-xl
                            i.fa.fa-map-marker
                            p {{ event.location }}
                        
                        div.py-3
                            p.text-lg {{ event.description }}

                        div(class="flex justify-between text-gray-500 dark:text-slate-400")
                            div.text-sm.flex.items-center.gap-x-2
                                i.fa.fa-calendar
                                p {{ event.date }}
                            div.text-sm.flex.items-center.gap-x-2
                                i.fa.fa-clock-o
                                p {{ event.time }}


</template>

<script setup lang="ts">

    const location = await getLocationName();
    const events = [
        {
            ID: '1',
            name: '2024 年獸無限',
            visible: '公開',
            r18: false,
            date: "2023-11-03",
            time: "12:20",
            location: location,
            description: '是什麽呢',
            organizer: "獸無限",
            official_website: null,
            announcement_url: null,
            picture: 'https://scontent.fkul4-4.fna.fbcdn.net/v/t39.30808-6/274793264_5025457270846003_9018699511657116258_n.png?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=9534ce&_nc_ohc=kHtlpdz99qgAX_rTln9&_nc_oc=AQnK8wh-0WGSe4UqR3cuCFML8HF19dvLxLgFHHHyCcNvoiE7yaEbzVAjoKNl_53nx8wWq1vWhR35cSPqpXK59JWO&_nc_ht=scontent.fkul4-4.fna&oh=00_AfBDXf3ljpLsmla-1qPa6nTFVUPTWgToQJhMJCUoPPwNfw&oe=65BC36E9'
        }
    ];

    console.info(events);

    const apiKey = 'AIzaSyAsU1GzsX9pROFgP58tYDXGGw_aM1eBoIo';
    const latitude = 25.18353293300336; // 例如，替换为你数据库中存储的经度
    const longitude = 121.41139524900339; // 例如，替换为你数据库中存储的纬度

    async function getLocationName() {
        try {
            const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.status === 'OK') {
                // 获取地点名称等信息
                const locationName = data.results[0].formatted_address;

                // 进行其他操作
                console.log(`经纬度 ${latitude}, ${longitude} 对应的地点是：${locationName}`);

                return locationName;
            } else {
                console.error(`无法获取经纬度 ${latitude}, ${longitude} 对应的地点。`);
                return null;
            }
        } catch (error) {
            console.error('发生错误：', error);
            return null;
        }
    }

</script>

