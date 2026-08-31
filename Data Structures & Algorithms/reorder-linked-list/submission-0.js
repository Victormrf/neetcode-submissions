/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // Initializing the second half list and splitting both lists
        let secondHalf = slow.next;
        slow.next = null;
        let prev = slow.next;

        // Reversing secod half
        while(secondHalf){
            let tmp = secondHalf.next;
            secondHalf.next = prev;
            prev = secondHalf;
            secondHalf = tmp;
        }

        let first = head;
        secondHalf = prev;

        while(secondHalf){
            let tmp1 = first.next;
            let tmp2 = secondHalf.next;
            first.next = secondHalf;
            secondHalf.next = tmp1;
            first = tmp1;
            secondHalf = tmp2;
        }
    }
}
