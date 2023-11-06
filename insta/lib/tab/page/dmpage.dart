import 'package:flutter/material.dart';

class DmPage extends StatelessWidget {
  const DmPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text(
          '디엠창',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 40),
        ),
      ),
    );
  }
}
