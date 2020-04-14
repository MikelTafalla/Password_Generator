1. Create the arrays (UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS) that we'll offer the user
2. We start generating the password by collecting the criteria. Function generatePasword()
    - Ask the user what criteria he/she wants to include in the password
    3. Study the user answers and select only the ones the user wants to include. We will store the possibilities ina separate variable.
        - If user wants Capital letters include them
        - If user also wants Lowercase letter include both.
        If user wants Capital letters but no Lowercase, jump into the next conditional
        If user wants Lowercase and no Caps. Include Lowercase and continue
        - If user wants Numbers include them
        If user wants Caps but not Lower, concatenate Caps + Numbers
        If user wants Lower but no Caps, concatenate Lower + Numbers
        If user only wants numbers, include them alone
        If user doesn't want Numbers, or Caps, or Lower continue
        - If user wants Everything concatenate all
        If user wants Symbols and Caps and Lower, but not Numbers. Concatenate SYmbols and Caps and Lower
        If user wants Symbols and Caps and Numbers but not Lower. Concatenate SYmbols and Caps and Numbers
        If user wants Symbols and Lower and Numbers, but not Caps. Concatenate Symbols and Lower and Numbers.
        If user wants Symbols and Lower, but not Caps and Numbers. Concat. Symbols and Lower
        If user wants Symbols and Numbers, but not Caps and Lower. Concat. Symbols and Numbers
        If user only want Symbols include them alone
        - If user doesn't pick anything, prompt user to pick
4. We apply conditions and generate the password
5. We write the password
