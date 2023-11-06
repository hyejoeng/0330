import 'package:flutter/material.dart';
import 'package:insta/tab/page/searchpage.dart';
import 'package:insta/tab/page/shortspage.dart';

import 'page/accountpage.dart';
import 'page/createpage.dart';
import 'page/homepage.dart';

class TabPage extends StatefulWidget {
  const TabPage({super.key});

  @override
  State<TabPage> createState() => _TabPageState();
}

class _TabPageState extends State<TabPage> {
  int _currentIndex = 0;

  final _pages = const [
    HomePage(),
    SearchPage(),
    CreatePage(),
    ShortsPage(),
    AccountPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed, // 슬라이드 애니메이션 비활성화
        currentIndex: _currentIndex,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search_rounded),
            label: 'search',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.add_box_outlined),
            label: 'create',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.movie_outlined),
            label: 'shoet',
          ),
          BottomNavigationBarItem(
            icon: SizedBox(
              width: 38,
              height: 38,
              child: CircleAvatar(
                radius: 50,
                backgroundImage: NetworkImage('https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/376048997_326171526590855_3457788151448857068_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=sOChLgZEoeoAX-uyTtJ&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfBv9pfyuAkBKSRJ8X6qzyd3BVxIOrLqwa5StPp2_vIpZA&oe=654CEE39&_nc_sid=982cc7'),
              ),
            ),
            label: 'account',
          ),
        ],
        unselectedItemColor: Colors.black,
        // 선택되지 않은 이이콘의 색상
        selectedItemColor: Colors.blueAccent,
        // 선택된 아이콘의 색상
        iconSize: 35,
      ),
    );
  }
}
