export interface ProductResponse {
  id: string
  name: string
  price_in_cents: number
  image_url: string
  description: string
  category: string
  sales: number
  created_at: string
}

export type ProductsResponse = Array<ProductResponse>

export const data: ProductsResponse = [
  {
    id: 'd0df85e2-4c67-4e79-9d3b-5fffb8a89ca1',
    name: 'Camiseta Ramones',
    price_in_cents: 8141,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    description:
      'Asperiores molestiae facere. Ut est iusto sed laborum praesentium optio odit placeat qui. Sit quia nam.',
    category: 't-shirts',
    sales: 29,
    created_at: '2023-03-30T10:03:06.667Z',
  },
  {
    id: '61945fef-c5fa-4fe6-a9e5-710127be6ff6',
    name: 'Camiseta evening',
    price_in_cents: 4381,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    description:
      'Inventore ut ut quo dolorum sit. Nesciunt et ad aut maiores ea explicabo nesciunt sapiente quisquam. Adipisci eveniet non velit est. Ut autem totam occaecati laborum vero possimus nisi expedita eligendi.',
    category: 't-shirts',
    sales: 6,
    created_at: '2023-09-23T17:02:10.627Z',
  },
  {
    id: '23749bd2-950c-46ff-beff-8b9677ec75b8',
    name: 'Caneca de cerâmica rústica',
    price_in_cents: 8333,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    description:
      'Laudantium qui officiis et aliquid reprehenderit expedita exercitationem. Porro veritatis iusto. Doloribus placeat sed. Voluptatibus modi minus in voluptatem doloremque voluptatem ut. Voluptatibus et ipsam.',
    category: 'mugs',
    sales: 16,
    created_at: '2023-12-10T12:28:02.346Z',
  },
  {
    id: 'd2679b3d-6aea-4f0a-814f-56a9815677de',
    name: 'Camiseta Broken Saints',
    price_in_cents: 7228,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    description:
      'Eius qui temporibus est beatae. Et sed dignissimos qui aspernatur inventore doloremque quaerat saepe. Nihil est optio quia sed exercitationem.',
    category: 't-shirts',
    sales: 19,
    created_at: '2023-07-14T01:05:17.800Z',
  },
  {
    id: 'b2e53f80-e8ae-492c-af6e-e1c9ac3f9d69',
    name: 'Caneca Decaf! P&Co',
    price_in_cents: 8311,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    description:
      'Iure animi fuga beatae et facilis nostrum et sunt. Odit aut sint. Sed sapiente officiis enim id cupiditate voluptatum. Velit qui et explicabo. Quae deleniti sint velit veniam. Voluptatem atque neque sed odio inventore pariatur dolorem.',
    category: 'mugs',
    sales: 24,
    created_at: '2023-12-07T07:43:18.195Z',
  },
  {
    id: '6000b4c5-34dc-4a33-adfe-84eac2239355',
    name: 'Caneca Never settle',
    price_in_cents: 7541,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    description:
      'Molestias culpa veritatis rerum eos atque minima et eius. Voluptates aperiam et sit porro repudiandae molestiae eaque alias. Debitis distinctio natus. Sed ut veritatis suscipit non aliquid dolorum voluptatibus.',
    category: 'mugs',
    sales: 26,
    created_at: '2023-01-31T14:08:14.446Z',
  },
  {
    id: '7facb917-4031-4f5c-8603-a3e15019bdec',
    name: 'Camiseta DREAMER',
    price_in_cents: 3157,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    description:
      'Excepturi magnam omnis est. Dolorem dolor dolores qui voluptatem laboriosam. Nulla debitis quod ut corrupti corporis enim non quia beatae. Et et et eum voluptas non. Non aut corrupti non aut quis ut non quos error.',
    category: 't-shirts',
    sales: 0,
    created_at: '2023-02-12T10:06:19.870Z',
  },
  {
    id: '22ed70a9-eeaf-458f-9211-739edf8bc60c',
    name: 'Camiseta not today.',
    price_in_cents: 9173,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    description:
      'Vero voluptatem rerum ut error necessitatibus facere. Non doloremque placeat explicabo sint. Rerum aut et eius aperiam ab odio odio id dolorum. Maiores et sunt nobis enim dolores at laborum eius ipsa. Sunt consectetur repudiandae omnis provident consectetur omnis. Inventore voluptas debitis.',
    category: 't-shirts',
    sales: 12,
    created_at: '2023-05-29T07:56:36.767Z',
  },
  {
    id: '85f8e941-a6b5-4a7c-9e59-f86547d85313',
    name: 'Camiseta Outcast',
    price_in_cents: 2696,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    description:
      'Quae aut et numquam in. Ab sit minus sint voluptatibus facere eligendi. Consequatur laboriosam eligendi sint. Qui non provident laborum et dolore et.',
    category: 't-shirts',
    sales: 35,
    created_at: '2023-02-20T11:34:54.497Z',
  },
  {
    id: '8211de0d-b6ed-4f89-8642-06fefef18457',
    name: 'Caneca The Grounds',
    price_in_cents: 2373,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    description:
      'Non doloremque et recusandae tempore omnis. Nostrum excepturi asperiores optio modi nesciunt fuga animi illo qui. Sunt rerum eligendi eaque provident ipsa temporibus. Et delectus saepe sit. Rerum eum aut maiores.',
    category: 'mugs',
    sales: 11,
    created_at: '2023-07-06T09:31:44.868Z',
  },
  {
    id: '599ba858-c0bf-4177-bedd-d1a721ef3595',
    name: 'Caneca Black Ring',
    price_in_cents: 7928,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    description:
      'Consectetur ea ex assumenda vel id illo voluptatem at. Accusantium magni natus eaque corporis maxime quam in. Veritatis ut quibusdam quod est. Voluptatem voluptatem rerum nihil sunt eveniet.',
    category: 'mugs',
    sales: 22,
    created_at: '2023-09-13T01:37:20.882Z',
  },
  {
    id: '78fe38dc-bc5d-4c0d-9c8f-ac87d6d14c15',
    name: 'Caneca preto fosco',
    price_in_cents: 5259,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    description:
      'Rerum in odit voluptatem maxime repellat aspernatur reprehenderit. Nulla eum aperiam. Eum et aliquam quasi architecto laborum.',
    category: 'mugs',
    sales: 16,
    created_at: '2023-09-10T15:43:46.365Z',
  },
  {
    id: '54a3d235-2788-4164-a3c7-630b6bb0d387',
    name: 'Caneca The Grounds',
    price_in_cents: 8028,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    description:
      'Non doloremque et recusandae tempore omnis. Nostrum excepturi asperiores optio modi nesciunt fuga animi illo qui. Sunt rerum eligendi eaque provident ipsa temporibus. Et delectus saepe sit. Rerum eum aut maiores.',
    category: 'mugs',
    sales: 14,
    created_at: '2023-03-04T12:37:04.448Z',
  },
  {
    id: '2cf576c1-38d6-4352-a0f9-7224c25076df',
    name: 'Camiseta not today.',
    price_in_cents: 8083,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    description:
      'Vero voluptatem rerum ut error necessitatibus facere. Non doloremque placeat explicabo sint. Rerum aut et eius aperiam ab odio odio id dolorum. Maiores et sunt nobis enim dolores at laborum eius ipsa. Sunt consectetur repudiandae omnis provident consectetur omnis. Inventore voluptas debitis.',
    category: 't-shirts',
    sales: 25,
    created_at: '2023-03-27T03:33:39.337Z',
  },
  {
    id: 'c8098cc7-c7f3-4aaa-b5e0-052988f88e72',
    name: 'Caneca Decaf! P&Co',
    price_in_cents: 8273,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    description:
      'Iure animi fuga beatae et facilis nostrum et sunt. Odit aut sint. Sed sapiente officiis enim id cupiditate voluptatum. Velit qui et explicabo. Quae deleniti sint velit veniam. Voluptatem atque neque sed odio inventore pariatur dolorem.',
    category: 'mugs',
    sales: 23,
    created_at: '2023-07-16T15:53:44.471Z',
  },
  {
    id: '0d85b0bc-c8df-4aa2-b174-ec3a39c9a990',
    name: 'Caneca preto fosco',
    price_in_cents: 9663,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    description:
      'Rerum in odit voluptatem maxime repellat aspernatur reprehenderit. Nulla eum aperiam. Eum et aliquam quasi architecto laborum.',
    category: 'mugs',
    sales: 17,
    created_at: '2023-11-13T13:47:32.849Z',
  },
  {
    id: '14a9ecfa-e938-4eaf-bd6e-6455d09272f7',
    name: 'Camiseta Outcast',
    price_in_cents: 8121,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    description:
      'Quae aut et numquam in. Ab sit minus sint voluptatibus facere eligendi. Consequatur laboriosam eligendi sint. Qui non provident laborum et dolore et.',
    category: 't-shirts',
    sales: 13,
    created_at: '2023-07-03T00:52:04.495Z',
  },
  {
    id: '38b7fb1e-e34d-4e0c-aa9c-0490fa506167',
    name: 'Caneca Never settle',
    price_in_cents: 7066,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    description:
      'Molestias culpa veritatis rerum eos atque minima et eius. Voluptates aperiam et sit porro repudiandae molestiae eaque alias. Debitis distinctio natus. Sed ut veritatis suscipit non aliquid dolorum voluptatibus.',
    category: 'mugs',
    sales: 15,
    created_at: '2023-12-29T14:25:42.742Z',
  },
  {
    id: '4606a5a0-a787-4f6a-b254-1ce6d13c3700',
    name: 'Camiseta evening',
    price_in_cents: 4128,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    description:
      'Inventore ut ut quo dolorum sit. Nesciunt et ad aut maiores ea explicabo nesciunt sapiente quisquam. Adipisci eveniet non velit est. Ut autem totam occaecati laborum vero possimus nisi expedita eligendi.',
    category: 't-shirts',
    sales: 40,
    created_at: '2023-02-27T11:34:43.915Z',
  },
  {
    id: '3938d766-44ef-4fe0-a227-95e270e91a39',
    name: 'Camiseta Ramones',
    price_in_cents: 5697,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    description:
      'Asperiores molestiae facere. Ut est iusto sed laborum praesentium optio odit placeat qui. Sit quia nam.',
    category: 't-shirts',
    sales: 13,
    created_at: '2023-03-13T05:25:45.329Z',
  },
  {
    id: '42e6ceb0-b7d6-43b9-b7fa-22e42137f131',
    name: 'Camiseta DREAMER',
    price_in_cents: 2756,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    description:
      'Excepturi magnam omnis est. Dolorem dolor dolores qui voluptatem laboriosam. Nulla debitis quod ut corrupti corporis enim non quia beatae. Et et et eum voluptas non. Non aut corrupti non aut quis ut non quos error.',
    category: 't-shirts',
    sales: 18,
    created_at: '2023-03-30T03:54:30.814Z',
  },
  {
    id: 'e274cc77-ab33-472c-8b6a-f98355ae569c',
    name: 'Camiseta Broken Saints',
    price_in_cents: 3000,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    description:
      'Eius qui temporibus est beatae. Et sed dignissimos qui aspernatur inventore doloremque quaerat saepe. Nihil est optio quia sed exercitationem.',
    category: 't-shirts',
    sales: 26,
    created_at: '2023-01-16T10:31:11.800Z',
  },
  {
    id: '8a7e18cd-821b-49e4-8878-e2cad05be6c7',
    name: 'Caneca Black Ring',
    price_in_cents: 3283,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    description:
      'Consectetur ea ex assumenda vel id illo voluptatem at. Accusantium magni natus eaque corporis maxime quam in. Veritatis ut quibusdam quod est. Voluptatem voluptatem rerum nihil sunt eveniet.',
    category: 'mugs',
    sales: 17,
    created_at: '2023-05-18T22:44:49.471Z',
  },
  {
    id: 'af70e18f-1983-4638-9140-832763696236',
    name: 'Caneca de cerâmica rústica',
    price_in_cents: 5631,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    description:
      'Laudantium qui officiis et aliquid reprehenderit expedita exercitationem. Porro veritatis iusto. Doloribus placeat sed. Voluptatibus modi minus in voluptatem doloremque voluptatem ut. Voluptatibus et ipsam.',
    category: 'mugs',
    sales: 31,
    created_at: '2023-07-03T23:12:36.194Z',
  },
  {
    id: 'd6390565-4d83-40c8-9520-717650be77ab',
    name: 'Camiseta evening',
    price_in_cents: 6841,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    description:
      'Inventore ut ut quo dolorum sit. Nesciunt et ad aut maiores ea explicabo nesciunt sapiente quisquam. Adipisci eveniet non velit est. Ut autem totam occaecati laborum vero possimus nisi expedita eligendi.',
    category: 't-shirts',
    sales: 25,
    created_at: '2023-04-22T06:08:52.634Z',
  },
  {
    id: '347dc147-e005-46b1-8999-493ed39c8551',
    name: 'Caneca The Grounds',
    price_in_cents: 5055,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    description:
      'Non doloremque et recusandae tempore omnis. Nostrum excepturi asperiores optio modi nesciunt fuga animi illo qui. Sunt rerum eligendi eaque provident ipsa temporibus. Et delectus saepe sit. Rerum eum aut maiores.',
    category: 'mugs',
    sales: 8,
    created_at: '2023-11-01T13:07:51.197Z',
  },
  {
    id: 'a8b59db7-954e-4b2d-9681-193591d38d3c',
    name: 'Camiseta DREAMER',
    price_in_cents: 5346,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    description:
      'Excepturi magnam omnis est. Dolorem dolor dolores qui voluptatem laboriosam. Nulla debitis quod ut corrupti corporis enim non quia beatae. Et et et eum voluptas non. Non aut corrupti non aut quis ut non quos error.',
    category: 't-shirts',
    sales: 15,
    created_at: '2023-07-07T01:14:20.184Z',
  },
  {
    id: 'b1dc1f18-3831-44a5-9075-d7eb08885e75',
    name: 'Camiseta Ramones',
    price_in_cents: 7454,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    description:
      'Asperiores molestiae facere. Ut est iusto sed laborum praesentium optio odit placeat qui. Sit quia nam.',
    category: 't-shirts',
    sales: 1,
    created_at: '2023-03-16T22:52:23.797Z',
  },
  {
    id: '2e93ba6a-f546-4c74-a5f1-eb1a8b0e46e1',
    name: 'Camiseta Broken Saints',
    price_in_cents: 2534,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    description:
      'Eius qui temporibus est beatae. Et sed dignissimos qui aspernatur inventore doloremque quaerat saepe. Nihil est optio quia sed exercitationem.',
    category: 't-shirts',
    sales: 39,
    created_at: '2023-04-29T07:14:01.751Z',
  },
  {
    id: '4faaab7b-1779-4483-a1a8-948f08630143',
    name: 'Caneca Black Ring',
    price_in_cents: 4734,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    description:
      'Consectetur ea ex assumenda vel id illo voluptatem at. Accusantium magni natus eaque corporis maxime quam in. Veritatis ut quibusdam quod est. Voluptatem voluptatem rerum nihil sunt eveniet.',
    category: 'mugs',
    sales: 22,
    created_at: '2023-09-23T03:54:11.755Z',
  },
  {
    id: '7b1ce672-6fc6-4453-b6e5-a301f7c78f1a',
    name: 'Camiseta Outcast',
    price_in_cents: 3157,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    description:
      'Quae aut et numquam in. Ab sit minus sint voluptatibus facere eligendi. Consequatur laboriosam eligendi sint. Qui non provident laborum et dolore et.',
    category: 't-shirts',
    sales: 2,
    created_at: '2023-01-30T08:04:59.147Z',
  },
  {
    id: '441990fd-ad67-48a1-ba0d-c77dd1da990a',
    name: 'Camiseta not today.',
    price_in_cents: 6318,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    description:
      'Vero voluptatem rerum ut error necessitatibus facere. Non doloremque placeat explicabo sint. Rerum aut et eius aperiam ab odio odio id dolorum. Maiores et sunt nobis enim dolores at laborum eius ipsa. Sunt consectetur repudiandae omnis provident consectetur omnis. Inventore voluptas debitis.',
    category: 't-shirts',
    sales: 7,
    created_at: '2023-06-06T17:37:36.799Z',
  },
  {
    id: '823d993e-ced2-4306-8437-9be4747f1c0d',
    name: 'Caneca de cerâmica rústica',
    price_in_cents: 3928,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    description:
      'Laudantium qui officiis et aliquid reprehenderit expedita exercitationem. Porro veritatis iusto. Doloribus placeat sed. Voluptatibus modi minus in voluptatem doloremque voluptatem ut. Voluptatibus et ipsam.',
    category: 'mugs',
    sales: 27,
    created_at: '2023-01-14T08:50:10.676Z',
  },
  {
    id: '046ef2b8-b916-4922-a62f-501807261d36',
    name: 'Caneca preto fosco',
    price_in_cents: 9135,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    description:
      'Rerum in odit voluptatem maxime repellat aspernatur reprehenderit. Nulla eum aperiam. Eum et aliquam quasi architecto laborum.',
    category: 'mugs',
    sales: 5,
    created_at: '2023-02-27T13:07:24.418Z',
  },
  {
    id: '88951483-8302-4d6b-8abf-ed7e141cc977',
    name: 'Caneca Never settle',
    price_in_cents: 9957,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    description:
      'Molestias culpa veritatis rerum eos atque minima et eius. Voluptates aperiam et sit porro repudiandae molestiae eaque alias. Debitis distinctio natus. Sed ut veritatis suscipit non aliquid dolorum voluptatibus.',
    category: 'mugs',
    sales: 39,
    created_at: '2023-12-22T11:05:32.467Z',
  },
  {
    id: '8aca76bc-6308-4974-a493-1d2031202e4c',
    name: 'Caneca Decaf! P&Co',
    price_in_cents: 6334,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    description:
      'Iure animi fuga beatae et facilis nostrum et sunt. Odit aut sint. Sed sapiente officiis enim id cupiditate voluptatum. Velit qui et explicabo. Quae deleniti sint velit veniam. Voluptatem atque neque sed odio inventore pariatur dolorem.',
    category: 'mugs',
    sales: 7,
    created_at: '2023-07-31T05:31:45.830Z',
  },
  {
    id: 'a3203206-6892-4ed8-a320-87484e533a12',
    name: 'Camiseta Outcast',
    price_in_cents: 8933,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    description:
      'Quae aut et numquam in. Ab sit minus sint voluptatibus facere eligendi. Consequatur laboriosam eligendi sint. Qui non provident laborum et dolore et.',
    category: 't-shirts',
    sales: 27,
    created_at: '2023-07-21T08:41:19.807Z',
  },
  {
    id: '54d96c4d-951b-4855-8591-60e029751d33',
    name: 'Camiseta DREAMER',
    price_in_cents: 9086,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    description:
      'Excepturi magnam omnis est. Dolorem dolor dolores qui voluptatem laboriosam. Nulla debitis quod ut corrupti corporis enim non quia beatae. Et et et eum voluptas non. Non aut corrupti non aut quis ut non quos error.',
    category: 't-shirts',
    sales: 14,
    created_at: '2023-05-14T17:28:12.152Z',
  },
  {
    id: 'a59a2f15-c7e1-45ec-b87d-59754c301f87',
    name: 'Caneca preto fosco',
    price_in_cents: 2224,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    description:
      'Rerum in odit voluptatem maxime repellat aspernatur reprehenderit. Nulla eum aperiam. Eum et aliquam quasi architecto laborum.',
    category: 'mugs',
    sales: 8,
    created_at: '2023-01-19T22:40:25.955Z',
  },
  {
    id: 'a4904b82-3cab-4b84-8ee0-c9b0c342f025',
    name: 'Caneca Decaf! P&Co',
    price_in_cents: 5392,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    description:
      'Iure animi fuga beatae et facilis nostrum et sunt. Odit aut sint. Sed sapiente officiis enim id cupiditate voluptatum. Velit qui et explicabo. Quae deleniti sint velit veniam. Voluptatem atque neque sed odio inventore pariatur dolorem.',
    category: 'mugs',
    sales: 9,
    created_at: '2023-04-17T18:36:21.456Z',
  },
  {
    id: '16ab57ab-b8ab-47b6-879f-4b6405403f27',
    name: 'Camiseta Broken Saints',
    price_in_cents: 4446,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    description:
      'Eius qui temporibus est beatae. Et sed dignissimos qui aspernatur inventore doloremque quaerat saepe. Nihil est optio quia sed exercitationem.',
    category: 't-shirts',
    sales: 0,
    created_at: '2023-09-26T07:28:45.067Z',
  },
  {
    id: 'c8a0e572-dcda-4497-a1f3-15641626ac17',
    name: 'Camiseta Ramones',
    price_in_cents: 5900,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    description:
      'Asperiores molestiae facere. Ut est iusto sed laborum praesentium optio odit placeat qui. Sit quia nam.',
    category: 't-shirts',
    sales: 0,
    created_at: '2023-11-16T06:52:32.032Z',
  },
  {
    id: '712ababc-ee65-4f8e-b3c0-aba23effc46a',
    name: 'Caneca de cerâmica rústica',
    price_in_cents: 5403,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    description:
      'Laudantium qui officiis et aliquid reprehenderit expedita exercitationem. Porro veritatis iusto. Doloribus placeat sed. Voluptatibus modi minus in voluptatem doloremque voluptatem ut. Voluptatibus et ipsam.',
    category: 'mugs',
    sales: 32,
    created_at: '2024-01-09T00:42:04.099Z',
  },
  {
    id: '4c0b6eb1-ae67-4d43-b3ad-ce3a439c7046',
    name: 'Caneca The Grounds',
    price_in_cents: 2168,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    description:
      'Non doloremque et recusandae tempore omnis. Nostrum excepturi asperiores optio modi nesciunt fuga animi illo qui. Sunt rerum eligendi eaque provident ipsa temporibus. Et delectus saepe sit. Rerum eum aut maiores.',
    category: 'mugs',
    sales: 37,
    created_at: '2023-10-23T20:52:35.301Z',
  },
  {
    id: 'a131b28f-f7a7-4013-90d7-ee89fa4ac645',
    name: 'Camiseta evening',
    price_in_cents: 9119,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    description:
      'Inventore ut ut quo dolorum sit. Nesciunt et ad aut maiores ea explicabo nesciunt sapiente quisquam. Adipisci eveniet non velit est. Ut autem totam occaecati laborum vero possimus nisi expedita eligendi.',
    category: 't-shirts',
    sales: 27,
    created_at: '2023-07-29T12:43:27.363Z',
  },
  {
    id: '5db367b1-16fc-42a4-91e7-e52c84a2fb40',
    name: 'Camiseta not today.',
    price_in_cents: 2116,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    description:
      'Vero voluptatem rerum ut error necessitatibus facere. Non doloremque placeat explicabo sint. Rerum aut et eius aperiam ab odio odio id dolorum. Maiores et sunt nobis enim dolores at laborum eius ipsa. Sunt consectetur repudiandae omnis provident consectetur omnis. Inventore voluptas debitis.',
    category: 't-shirts',
    sales: 33,
    created_at: '2023-04-01T17:31:20.508Z',
  },
  {
    id: '4d1b5868-33c8-44f6-8481-cca3a2343486',
    name: 'Caneca Never settle',
    price_in_cents: 7629,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    description:
      'Molestias culpa veritatis rerum eos atque minima et eius. Voluptates aperiam et sit porro repudiandae molestiae eaque alias. Debitis distinctio natus. Sed ut veritatis suscipit non aliquid dolorum voluptatibus.',
    category: 'mugs',
    sales: 29,
    created_at: '2023-03-24T13:44:58.180Z',
  },
  {
    id: '7788b4e0-81fe-45cd-a449-41b1de6011d7',
    name: 'Caneca Black Ring',
    price_in_cents: 7672,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    description:
      'Consectetur ea ex assumenda vel id illo voluptatem at. Accusantium magni natus eaque corporis maxime quam in. Veritatis ut quibusdam quod est. Voluptatem voluptatem rerum nihil sunt eveniet.',
    category: 'mugs',
    sales: 9,
    created_at: '2023-12-17T10:49:42.293Z',
  },
  {
    id: '6d67c4e7-f3e7-46b9-b2b8-c18b12bf5b1d',
    name: 'Caneca The Grounds',
    price_in_cents: 3670,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
    description:
      'Non doloremque et recusandae tempore omnis. Nostrum excepturi asperiores optio modi nesciunt fuga animi illo qui. Sunt rerum eligendi eaque provident ipsa temporibus. Et delectus saepe sit. Rerum eum aut maiores.',
    category: 'mugs',
    sales: 38,
    created_at: '2023-02-11T22:47:31.226Z',
  },
  {
    id: 'dff589ce-df9a-41c9-acca-0a1a1a71f267',
    name: 'Camiseta evening',
    price_in_cents: 3862,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    description:
      'Inventore ut ut quo dolorum sit. Nesciunt et ad aut maiores ea explicabo nesciunt sapiente quisquam. Adipisci eveniet non velit est. Ut autem totam occaecati laborum vero possimus nisi expedita eligendi.',
    category: 't-shirts',
    sales: 33,
    created_at: '2023-05-20T12:28:07.835Z',
  },
  {
    id: '0e33a980-dad4-4855-9dee-714ac47e7c0b',
    name: 'Caneca Decaf! P&Co',
    price_in_cents: 3948,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    description:
      'Iure animi fuga beatae et facilis nostrum et sunt. Odit aut sint. Sed sapiente officiis enim id cupiditate voluptatum. Velit qui et explicabo. Quae deleniti sint velit veniam. Voluptatem atque neque sed odio inventore pariatur dolorem.',
    category: 'mugs',
    sales: 35,
    created_at: '2023-12-13T07:33:53.361Z',
  },
  {
    id: '712c7f51-b398-43e1-a082-b8a03a96d87f',
    name: 'Caneca preto fosco',
    price_in_cents: 2672,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
    description:
      'Rerum in odit voluptatem maxime repellat aspernatur reprehenderit. Nulla eum aperiam. Eum et aliquam quasi architecto laborum.',
    category: 'mugs',
    sales: 19,
    created_at: '2023-11-06T02:45:01.405Z',
  },
  {
    id: 'e460e0b3-1fee-4548-b82c-b57cb44adfd6',
    name: 'Caneca Black Ring',
    price_in_cents: 5104,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
    description:
      'Consectetur ea ex assumenda vel id illo voluptatem at. Accusantium magni natus eaque corporis maxime quam in. Veritatis ut quibusdam quod est. Voluptatem voluptatem rerum nihil sunt eveniet.',
    category: 'mugs',
    sales: 5,
    created_at: '2023-05-19T16:28:48.004Z',
  },
  {
    id: '3445d137-4e17-40e3-9d98-27ab64bb0b9c',
    name: 'Camiseta DREAMER',
    price_in_cents: 9409,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
    description:
      'Excepturi magnam omnis est. Dolorem dolor dolores qui voluptatem laboriosam. Nulla debitis quod ut corrupti corporis enim non quia beatae. Et et et eum voluptas non. Non aut corrupti non aut quis ut non quos error.',
    category: 't-shirts',
    sales: 26,
    created_at: '2023-11-13T01:11:16.307Z',
  },
  {
    id: '20d17d10-a23a-43da-b3b0-704a5d670885',
    name: 'Camiseta not today.',
    price_in_cents: 7579,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    description:
      'Vero voluptatem rerum ut error necessitatibus facere. Non doloremque placeat explicabo sint. Rerum aut et eius aperiam ab odio odio id dolorum. Maiores et sunt nobis enim dolores at laborum eius ipsa. Sunt consectetur repudiandae omnis provident consectetur omnis. Inventore voluptas debitis.',
    category: 't-shirts',
    sales: 40,
    created_at: '2023-07-01T17:55:33.689Z',
  },
  {
    id: '6a6d8903-b022-42a4-af5a-61746b790f7d',
    name: 'Caneca Never settle',
    price_in_cents: 8758,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
    description:
      'Molestias culpa veritatis rerum eos atque minima et eius. Voluptates aperiam et sit porro repudiandae molestiae eaque alias. Debitis distinctio natus. Sed ut veritatis suscipit non aliquid dolorum voluptatibus.',
    category: 'mugs',
    sales: 28,
    created_at: '2023-02-06T13:02:20.234Z',
  },
  {
    id: '79ec8b7e-9b1a-4d88-b4e8-1db2cf7e15ac',
    name: 'Camiseta Ramones',
    price_in_cents: 4284,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
    description:
      'Asperiores molestiae facere. Ut est iusto sed laborum praesentium optio odit placeat qui. Sit quia nam.',
    category: 't-shirts',
    sales: 29,
    created_at: '2023-05-19T08:05:22.111Z',
  },
  {
    id: '9c3a5afe-f9dc-4f76-afc6-7478396f7c2f',
    name: 'Camiseta Outcast',
    price_in_cents: 6372,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
    description:
      'Quae aut et numquam in. Ab sit minus sint voluptatibus facere eligendi. Consequatur laboriosam eligendi sint. Qui non provident laborum et dolore et.',
    category: 't-shirts',
    sales: 9,
    created_at: '2023-01-13T12:09:24.548Z',
  },
  {
    id: '4481a26f-e77a-4b5e-b875-758158917ac0',
    name: 'Caneca de cerâmica rústica',
    price_in_cents: 8534,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    description:
      'Laudantium qui officiis et aliquid reprehenderit expedita exercitationem. Porro veritatis iusto. Doloribus placeat sed. Voluptatibus modi minus in voluptatem doloremque voluptatem ut. Voluptatibus et ipsam.',
    category: 'mugs',
    sales: 22,
    created_at: '2023-10-19T17:28:24.256Z',
  },
  {
    id: 'a0e98874-4004-4d6c-975e-fae9a8ca2648',
    name: 'Camiseta Broken Saints',
    price_in_cents: 9544,
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
    description:
      'Eius qui temporibus est beatae. Et sed dignissimos qui aspernatur inventore doloremque quaerat saepe. Nihil est optio quia sed exercitationem.',
    category: 't-shirts',
    sales: 18,
    created_at: '2023-04-26T06:27:33.002Z',
  },
]
