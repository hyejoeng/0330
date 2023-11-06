import 'package:flutter/material.dart';

class ShortsPage extends StatelessWidget {
  const ShortsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text(
          '숏츠',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 40),
        ),
      ),
    );
  }
}
