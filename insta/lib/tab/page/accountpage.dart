import 'package:flutter/material.dart';

class AccountPage extends StatelessWidget {
  const AccountPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text(
          '내 프로필',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 40),
        ),
      ),
    );
  }
}
