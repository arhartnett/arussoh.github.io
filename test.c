/*--------------------------------------------------------------------*/
/* mywc.c                                                             */
/* Author: Bob Dondero                                                */
/* Flattener: Andrew Hartnett                                         */
/*--------------------------------------------------------------------*/

#include <stdio.h>
#include <ctype.h>

/*--------------------------------------------------------------------*/

/* In lieu of a boolean data type. */
enum {FALSE, TRUE};

/*--------------------------------------------------------------------*/

static int iLineCount = 0;   /* Bad style. */
static int iWordCount = 0;   /* Bad style. */
static int iCharCount = 0;   /* Bad style. */
static int iChar;            /* Bad style. */
static int iInWord = FALSE;  /* Bad style. */

/*--------------------------------------------------------------------*/

/* Write to stdout counts of how many lines, words, and characters
   are in stdin. A word is a sequence of non-whitespace characters.
   Whitespace is defined by the isspace() function. Return 0. */

int main(void)
{
   loop1:
      if ((iChar = getchar()) == EOF) goto endloop1;

      iCharCount++;
      if (! (isspace(iChar))) goto else1;
      if (! (iInWord)) goto endif1;
      iWordCount++;
      iInWord = FALSE;
      goto endif1;  
  else1:
      if (iInWord) goto endif1;
      iInWord = TRUE;
  
  endif1:          
      if (iChar != '\n') goto endif3;
      iLineCount++;
  
  endif3:
      goto loop1;
  
  endloop1:
      if (!iInWord) goto endif4;
      iWordCount++;
  
  endif4:
      printf("%7d%8d%8d\n", iLineCount, iWordCount, iCharCount);
      return 0;
}
