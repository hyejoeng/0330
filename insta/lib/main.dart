import 'package:flutter/material.dart';
import 'package:insta/tab/page/dmpage.dart';
import 'package:insta/tab/tab.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.pink),
        useMaterial3: true,
      ),
      home: const IntroPage(),
    );
  }


  Widget _buildContentList(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 15),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          children: [
            Row(
              children: [
                Container(
                  width: 50,
                  height: 50,
                  margin: const EdgeInsets.only(right: 12),
                  child: const CircleAvatar(
                    radius: 50,
                    backgroundImage: NetworkImage(
                        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/376048997_326171526590855_3457788151448857068_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=sOChLgZEoeoAX-uyTtJ&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfBv9pfyuAkBKSRJ8X6qzyd3BVxIOrLqwa5StPp2_vIpZA&oe=654CEE39&_nc_sid=982cc7'),
                  ),
                ),
                const Text(
                  'coogie',
                  style: TextStyle(fontSize: 16),
                ),
                const Expanded(child: SizedBox()),
                const Icon(Icons.more_vert),
              ],
            ),
            const SizedBox(height: 15),
            Image.asset(
              'asset/images/coogie1.jpg',
              fit: BoxFit.cover,
              height: 400,
              width: MediaQuery.of(context).size.width,
            ),
            const SizedBox(height: 15),
            const Row(
              children: [
                Icon(Icons.favorite_border, size: 35),
                SizedBox(width: 10),
                Icon(
                  Icons.chat_bubble_outline,
                  size: 35,
                ),
                SizedBox(width: 10),
                Icon(
                  Icons.send_outlined,
                  size: 35,
                ),
              ],
            ),
            const SizedBox(height: 15),
            const SizedBox(
              width: double.infinity,
              child: Text('네모 님 외 여러 명이 좋아합니다.'),
            ),
            const SizedBox(
              height: 5,
            ),
            const SizedBox(
                width: double.infinity,
                child: Row(
                  children: [
                    Text(
                      'coogie',
                      style: TextStyle(fontSize: 16),
                    ),
                    SizedBox(
                      width: 8,
                    ),
                    Text('쿠기의 RIGHT NOW'),
                  ],
                ))
          ],
        ),
      ),
    );
  }

  Widget _buildStoryList() {
    return Padding(
      padding: const EdgeInsets.all(10),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          children: [
            Column(
              children: [
                Container(
                  decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(100000)),
                      color: Colors.pink),
                  width: 70,
                  height: 70,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                ),
                const SizedBox(height: 4),
                const Text('내 스토리'),
              ],
            ),
            Column(
              children: [
                Container(
                  decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(100000)),
                      color: Colors.blueAccent),
                  width: 70,
                  height: 70,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                ),
                const SizedBox(height: 4),
                const Text('coogie'),
              ],
            ),
            Column(
              children: [
                Container(
                  decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(100000)),
                      color: Colors.cyan),
                  width: 70,
                  height: 70,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                ),
                const SizedBox(height: 4),
                const Text('개복치'),
              ],
            ),
            Column(
              children: [
                Container(
                  decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(100000)),
                      color: Colors.red),
                  width: 70,
                  height: 70,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                ),
                const SizedBox(height: 4),
                const Text('퐉신이'),
              ],
            ),
            Column(
              children: [
                Container(
                  decoration: const BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(100000)),
                      color: Colors.indigo),
                  width: 70,
                  height: 70,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                ),
                const SizedBox(height: 4),
                const Text('제1장'),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class IntroPage extends StatelessWidget {
  const IntroPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          const SizedBox(width: 10),
          Image.asset('asset/images/logo.png',
              width: MediaQuery.of(context).size.width * 0.3),
          const Expanded(child: SizedBox()),
          IconButton(
            onPressed: () {},
            icon: const Icon(Icons.favorite_border),
          ),
          IconButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) => const DmPage()),);
            },
            icon: const Icon(Icons.send),
          ),
          const SizedBox(width: 10),
        ],
      ),
      body: const TabPage(),
    );
  }
}
