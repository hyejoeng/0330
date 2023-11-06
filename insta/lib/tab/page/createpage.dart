import 'package:flutter/material.dart';

class CreatePage extends StatelessWidget {
  const CreatePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text(
          '새 게시물',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 40),
        ),
      ),
    );
  }
}
